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

    // Button event and DOM manipulation
    const downloadCvBtn = document.getElementById('download-cv');
    if(downloadCvBtn) {
        downloadCvBtn.addEventListener('click', (e) => {
            // The download is now handled by the HTML download attribute
            console.log('CV download initiated.');
        });
    }

    // Scroll to Top functionality
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if(scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.display = 'flex';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});