// Function to handle the mobile navigation toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Function to handle Scroll Animations (Fade in on scroll)
const scrollAppear = () => {
    const hiddenElements = document.querySelectorAll('.hidden');
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // Optional: Remove class to replay animation when scrolling up
                // entry.target.classList.remove('show');
            }
        });
    });

    hiddenElements.forEach((el) => observer.observe(el));
}

// Add keyframes for nav animation dynamically
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes navLinkFade {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
}`;
document.head.appendChild(styleSheet);

// Initialize functions
navSlide();
scrollAppear();
