/**
 * Meta Scientia - Animation Controller
 * Handles scroll-triggered reveals using IntersectionObserver.
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize Reveal on Scroll
    const initRevealOnScroll = () => {
        const revealElements = document.querySelectorAll('.reveal');

        if (!revealElements.length) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.01
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => {
            observer.observe(el);
            // Immediate check for elements already in view
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('active');
            }
        });
    };

    // 2. Handle Immediate Load Animations (like Hero)
    const initLoadAnimations = () => {
        // Elements with .animate-on-load are triggered immediately or with a small timeout
        const loadElements = document.querySelectorAll('.animate-on-load');
        loadElements.forEach(el => {
            el.classList.add('active');
        });
    };

    // Initialize all
    initRevealOnScroll();
    initLoadAnimations();
});
