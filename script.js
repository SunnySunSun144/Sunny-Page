// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
}

// Close mobile menu when a link is clicked
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards and project cards
document.querySelectorAll('.group, .bg-gradient-to-br').forEach(element => {
    observer.observe(element);
});

// Active link highlighting in navigation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-blue-400');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-blue-400');
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('nav');
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});

// Email validation and form handling (future enhancement)
function handleContactForm(event) {
    // Placeholder for form submission
    event.preventDefault();
    console.log('Contact form submitted');
}

// Add animation to buttons on hover
const buttons = document.querySelectorAll('button, a[href^="#"]');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Parallax effect for hero section
const heroSection = document.getElementById('home');
if (heroSection) {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
}

// Console message
console.log('%c👋 Welcome to Sunny\'s Portfolio!', 'color: #60a5fa; font-size: 16px; font-weight: bold;');
console.log('%cFeel free to explore and check out the code!', 'color: #06b6d4; font-size: 14px;');
