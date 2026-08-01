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

    // Form Validation for Contact Page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');

            // Get error spans
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const subjectError = document.getElementById('subjectError');
            const messageError = document.getElementById('messageError');

            let isValid = true;

            // Reset errors
            nameError.textContent = '';
            nameError.classList.remove('visible');
            emailError.textContent = '';
            emailError.classList.remove('visible');
            subjectError.textContent = '';
            subjectError.classList.remove('visible');
            messageError.textContent = '';
            messageError.classList.remove('visible');

            // Validate Name
            if (name.value.trim() === '') {
                nameError.textContent = 'Name is required';
                nameError.classList.add('visible');
                isValid = false;
            }

            // Validate Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                emailError.textContent = 'Email is required';
                emailError.classList.add('visible');
                isValid = false;
            } else if (!emailPattern.test(email.value.trim())) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.classList.add('visible');
                isValid = false;
            }

            // Validate Subject
            if (subject.value.trim() === '') {
                subjectError.textContent = 'Subject is required';
                subjectError.classList.add('visible');
                isValid = false;
            }

            // Validate Message
            if (message.value.trim() === '') {
                messageError.textContent = 'Message is required';
                messageError.classList.add('visible');
                isValid = false;
            }

            if (isValid) {
                // If valid, you can submit the form via AJAX or similar here.
                // For now, we will just show an alert and reset the form.
                alert('Thank you for your message! It has been sent successfully.');
                contactForm.reset();
            }
        });
    }
});