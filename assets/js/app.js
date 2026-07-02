/* ==========================================================================
   NorthStudio // Application JavaScript Core
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Manager ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            if (themeToggleBtn) themeToggleBtn.textContent = '[theme: dark]';
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            if (themeToggleBtn) themeToggleBtn.textContent = '[theme: light]';
        }
    }

    // Check localStorage or fallback to system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }

    // Listen for theme toggle click
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isDark = document.body.classList.contains('dark-theme');
            setTheme(isDark ? 'light' : 'dark');
            playSound('click');
        });
    }

    // --- Audio Controller ---
    let soundEnabled = false;
    let ambientAudio = null;
    const soundToggleBtn = document.getElementById('sound-toggle');

    function toggleSound() {
        soundEnabled = !soundEnabled;
        if (soundToggleBtn) {
            soundToggleBtn.textContent = soundEnabled ? '[sound: on]' : '[sound: off]';
        }

        if (soundEnabled) {
            // Lazy load ambient loop
            if (!ambientAudio) {
                ambientAudio = new Audio('assets/audio/ambient.mp3');
                ambientAudio.loop = true;
            }
            ambientAudio.play().catch(() => {
                console.log('Ambient track offline or not found. Disabling ambient loop.');
            });
            playSound('click');
        } else {
            if (ambientAudio) {
                ambientAudio.pause();
            }
        }
    }

    function playSound(type) {
        if (!soundEnabled) return;
        const sound = new Audio(`assets/audio/${type}.mp3`);
        sound.volume = type === 'hover' ? 0.3 : 0.6;
        sound.play().catch(() => {
            // Fail silently and gracefully if files do not exist
        });
    }

    if (soundToggleBtn) {
        soundToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleSound();
        });
    }

    // Bind sound events to interactive components
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .feature-card, .contact-link');
    interactiveElements.forEach(el => {
        // Exclude sound toggle button itself from double clicks
        if (el.id === 'sound-toggle') return;

        el.addEventListener('mouseenter', () => {
            playSound('hover');
        });

        el.addEventListener('click', () => {
            playSound('click');
        });
    });

    // --- Active Link Navigator ---
    // Highlight page navigation links based on window location pathname
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Check for exact path or homepage hash references
        if (href === currentPath || (currentPath === 'index.html' && href === './')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- Mobile Menu Toggle ---
    const navToggleBtn = document.getElementById('nav-toggle');
    const siteNav = document.getElementById('site-nav');

    if (navToggleBtn && siteNav) {
        navToggleBtn.addEventListener('click', () => {
            const isActive = siteNav.classList.toggle('active');
            navToggleBtn.setAttribute('aria-expanded', isActive);
            playSound('click');
        });
    }

    // --- Project Categories Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        card.hidden = false;
                    } else {
                        card.hidden = true;
                    }
                });
                playSound('click');
            });
        });
    }
});
