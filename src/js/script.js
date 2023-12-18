document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const navLinks = document.getElementById('navLinks');

    menuButton.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });

    // Hide the navigation links when a link is clicked
    const navLinksList = document.querySelectorAll('.navigation__links-link');
    navLinksList.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('show');
        });
    });
});