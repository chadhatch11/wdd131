const temples = [
  {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
      templeName: "Trujillo Peru Temple",
      location: "Trujillo, Peru",
      dedicated: "2000, July, 30",
      area: 10890,
      imageUrl: "images/trujillo-temple.jpg"
  },
  {
      templeName: "Salt Lake Temple",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6-24",
      area: 382207,
      imageUrl: "images/slc-temple.jpeg"
  },
  {
      templeName: "St. George Utah Temple",
      location: "St. George, Utah, United States",
      dedicated: "1877, April, 6-8",
      area: 143969,
      imageUrl: "images/st-george-utah-temple.jpeg"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('temple-gallery');
  const navLinks = document.querySelectorAll('nav a');

  function displayTemples(filteredTemples) {
      gallery.innerHTML = '';
      filteredTemples.forEach(temple => {
          const templeCard = document.createElement('section');
          templeCard.classList.add('temple-card');

          const templeName = document.createElement('h3');
          templeName.textContent = temple.templeName;

          const location = document.createElement('p');
          location.innerHTML = `<span class="label">Location: <span>${temple.location}</span></span>`;

          const dedicated = document.createElement('p');
          dedicated.innerHTML = `<span class="label">Dedicated: <span>${temple.dedicated}</span></span>`;

          const area = document.createElement('p');
          area.innerHTML = `<span class="label">Size: <span>${temple.area} sq ft</span></span>`;

          const image = document.createElement('img');
          image.src = temple.imageUrl;
          image.alt = `${temple.templeName} Temple`;
          image.loading = 'lazy';

          templeCard.appendChild(templeName);
          templeCard.appendChild(location);
          templeCard.appendChild(dedicated);
          templeCard.appendHere




          templeCard.appendChild(area);
          templeCard.appendChild(image);

          gallery.appendChild(templeCard);
      });
  }

  function filterTemples(criteria) {
      let filteredTemples = [];
      const currentYear = new Date().getFullYear();

      switch (criteria) {
          case 'old':
              filteredTemples = temples.filter(temple => {
                  const year = parseInt(temple.dedicated.split(',')[0]);
                  return year < 1900;
              });
              break;
          case 'new':
              filteredTemples = temples.filter(temple => {
                  const year = parseInt(temple.dedicated.split(',')[0]);
                  return year >= 2000;
              });
              break;
          case 'large':
              filteredTemples = temples.filter(temple => temple.area > 90000);
              break;
          case 'small':
              filteredTemples = temples.filter(temple => temple.area < 10000);
              break;
          default:
              filteredTemples = temples;
              break;
      }

      displayTemples(filteredTemples);
  }

  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const filterCriteria = e.target.getAttribute('data-filter');
          filterTemples(filterCriteria);
      });
  });

  // Display all temples on initial load
  filterTemples('all');
});
