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
            rootMargin: '-10% 0px -10% 0px', // More lenient margin
            threshold: 0.1 // Lower threshold for reliability
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
            // Immediate check for elements already in view (matching 10% margin)
            const rect = el.getBoundingClientRect();
            const viewBuffer = window.innerHeight * 0.1; // 10% buffer
            if (rect.top < window.innerHeight - viewBuffer && rect.bottom > viewBuffer) {
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
