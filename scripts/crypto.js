const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD,EUR,GBP";

const vm = new Vue({
    el: '#app',   
    data: {
        results: {},
        currentView: 'home'
    },
    mounted() {
        if (this.currentView === 'prices') {
            this.update();
            this.timer = setInterval(this.update, 1000);
        }
    },
    watch: {
        currentView: function(newView) {
            if (newView === 'prices') {
                this.update();
                this.timer = setInterval(this.update, 1000);
            } else {
                clearInterval(this.timer);
            }
        }
    },
    methods: {
        update: function() {
            axios.get(url).then(response => {
                this.results = response.data;
            }).catch(error => {
                console.error("Error fetching data: ", error);
            });
        }
    }
});
