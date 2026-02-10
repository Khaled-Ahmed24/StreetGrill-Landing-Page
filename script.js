document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const reveals = document.querySelectorAll('.reveal');

    function reveal() {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', reveal);

    // Initial call to reveal items already in view
    reveal();

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
        });
    }

    // Cart Feedback for Demo
    const cartButtons = document.querySelectorAll('.product-card button');

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = 'Item added to cart! 🍔';
    document.body.appendChild(toast);

    cartButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            toast.classList.add('show');
            btn.innerText = 'Added!';
            btn.style.background = 'var(--white)';
            btn.style.color = 'var(--background)';

            setTimeout(() => {
                toast.classList.remove('show');
                btn.innerText = 'Add to Cart';
                btn.style.background = 'var(--surface)';
                btn.style.color = 'var(--primary)';
            }, 2000);
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.padding = '1.5rem 0';
            navbar.style.boxShadow = 'none';
        }
    });
});
