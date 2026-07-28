document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');
    
    if(mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active');
            navbar.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('is-active');
            navbar.classList.remove('active');
        });
    });
});