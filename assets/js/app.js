/* ==========================================================================
   NorthStudio // Application JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // --- Live System Clock ---
    const clockElement = document.getElementById('header-clock');

    function updateClock() {
        if (!clockElement) return;

        const now = new Date();
        const timeString = now.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        // Calculate timezone offset
        const offsetMinutes = -now.getTimezoneOffset();
        const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
        const offsetMinsRemaining = Math.abs(offsetMinutes) % 60;
        const sign = offsetMinutes >= 0 ? '+' : '-';

        const offsetString = `GMT${sign}${String(offsetHours).padStart(2, '0')}:${String(offsetMinsRemaining).padStart(2, '0')}`;

        clockElement.textContent = `${timeString} ${offsetString}`;
    }

    // Initialize clock
    updateClock();
    setInterval(updateClock, 1000);

    // --- Smooth Anchor Navigation ---
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
