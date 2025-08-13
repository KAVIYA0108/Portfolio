// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        // Change the icon from bars to times and vice-versa
        menuIcon.querySelector('i').classList.toggle('fa-bars');
        menuIcon.querySelector('i').classList.toggle('fa-xmark');
    });

    // --- Active Link on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150; // Adjust offset to trigger earlier
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                // Remove 'active' class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                // Add 'active' class to the corresponding link
                document.querySelector(`.navbar a[href*=${id}]`).classList.add('active');
            }
        });
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        // Options for the observer
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    // Observe each element with the 'reveal' class
    revealElements.forEach(element => {
        observer.observe(element);
    });

    // --- Form Submission (Example) ---
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission
        // In a real application, you would send this data to a backend server.
        // For this template, we'll just log it to the console.
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        console.log('Form data submitted:', data);

        // You could also add a success message to the user here
        // alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset(); // Clear the form fields
    });

});
