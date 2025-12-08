document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.intl-carousel-track');
    if (!track) return;

    const items = Array.from(track.children);
    if (items.length === 0) return;

    let currentIndex = 0;
    const totalItems = items.length;

    // Function to update classes based on current index
    function updateCarousel() {
        items.forEach((item, index) => {
            // Calculate position relative to current index (0 to 7)
            // 0 is center, 1 is right, 7 is left (previous)
            let offset = (index - currentIndex + totalItems) % totalItems;

            // Reset classes
            item.className = 'intl-carousel-item';

            // Add position class
            item.classList.add(`position-${offset}`);
        });
    }

    // Add click event to each item to bring it to center
    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Determine direction for smoother transition if needed, 
            // but for this simple logic, just setting index works.
            // To make it "smart" (shortest path), we could adjust logic, 
            // but simple assignment is robust enough for 8 items.
            currentIndex = index;
            updateCarousel();
            resetTimer();
        });
    });

    // Auto Play Logic
    let autoPlayTimer;

    function next() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function startTimer() {
        // 3 seconds interval for smooth reading
        autoPlayTimer = setInterval(next, 3000);
    }

    function resetTimer() {
        clearInterval(autoPlayTimer);
        startTimer();
    }

    // Initial setup
    updateCarousel();
    startTimer();

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
    track.addEventListener('mouseleave', startTimer);
});
