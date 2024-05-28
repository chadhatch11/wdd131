@media screen and (min-width: 480px) {
        #temple-img {
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
        }

        #hamburger {
            display: none;
        }

        #nav {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }

        ul {
            display: flex;
            flex-direction: row;
            float: right;
            margin: 0;
            text-align: center;
            padding: 0;
            min-width: 35%;
            justify-content: space-between;
        }
}