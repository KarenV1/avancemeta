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
            // Calculate distance from current index
            // We want to find the shortest distance in a circular array
            let dist = (index - currentIndex + totalItems) % totalItems;

            // Remove all position classes
            item.className = 'intl-carousel-item';

            if (dist === 0) {
                item.classList.add('position-0'); // Center
            } else if (dist === 1) {
                item.classList.add('position-1'); // Right 1
            } else if (dist === 2) {
                item.classList.add('position-2'); // Right 2
            } else if (dist === 3) {
                item.classList.add('position-3'); // Right 3 (Fade boundary)
            } else if (dist === totalItems - 1) {
                item.classList.add('position-7'); // Left 1
            } else if (dist === totalItems - 2) {
                item.classList.add('position-6'); // Left 2
            } else if (dist === totalItems - 3) {
                item.classList.add('position-5'); // Left 3 (Fade boundary)
            } else {
                item.classList.add('position-hidden'); // Hide everything else
            }
        });
    }

    // Add click event to each item to bring it to center
    items.forEach((item, index) => {
        item.addEventListener('click', () => {
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
