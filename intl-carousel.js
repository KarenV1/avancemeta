document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.intl-carousel-track');
    if (!track) return;

    const items = Array.from(track.children);
    if (items.length === 0) return;

    let currentIndex = 0;
    const totalItems = items.length;



    // Function to update classes based on current index
    // Uses universal symmetric logic for any N
    function updateCarousel() {
        items.forEach((item, index) => {
            // Calculate distance from current index in circular array
            let dist = (index - currentIndex + totalItems) % totalItems;

            // Remove all position classes
            item.className = 'intl-carousel-item';

            if (dist === 0) {
                item.classList.add('position-0'); // Center active
            } else {
                // Determine shortest path to decide side
                // If dist < totalItems / 2, proper to Right
                // If dist > totalItems / 2, proper to Left

                if (dist <= totalItems / 2) {
                    // Right Side
                    if (dist <= 3) {
                        item.classList.add(`position-${dist}`);
                    } else {
                        item.classList.add('position-hidden');
                    }
                } else {
                    // Left Side
                    let leftDist = totalItems - dist;
                    if (leftDist <= 3) {
                        // Map: 1->7, 2->6, 3->5
                        item.classList.add(`position-${8 - leftDist}`);
                    } else {
                        item.classList.add('position-hidden');
                    }
                }
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
        // Clear existing timer to prevent duplicates
        if (autoPlayTimer) clearInterval(autoPlayTimer);
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
