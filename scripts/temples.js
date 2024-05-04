function adjustGrid() {
    const main = document.querySelector('main');
    const images = document.querySelectorAll('.image');

    const numColumns = Math.min(Math.floor(main.clientWidth / 200), 3);

    main.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
}

adjustGrid();
window.addEventListener('resize', adjustGrid);

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('nav a');

    hamburger.addEventListener('click', function () {
        navLinks.forEach(link => {
            link.style.display = link.style.display === 'block' ? 'none' : 'block';
        });
    });
});