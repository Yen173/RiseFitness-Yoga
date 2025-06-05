// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});

// Scroll Top
document.addEventListener('DOMContentLoaded', () => {
    const scrollTopButton = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.add('active');
        } else {
            scrollTopButton.classList.remove('active');
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Schedule Tabs
document.addEventListener('DOMContentLoaded', () => {
    const dayTabs = document.querySelectorAll('.day-tab');

    dayTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            dayTabs.forEach(t => {
                t.classList.remove('active');
                t.classList.add('inactive');
            });
            tab.classList.remove('inactive');
            tab.classList.add('active');
        });
    });
});

// Testimonial Slider
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonial-slider');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    const slideWidth = 374; // card width + gap

    prevButton.addEventListener('click', () => {
        slider.scrollBy({
            left: -slideWidth,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        slider.scrollBy({
            left: slideWidth,
            behavior: 'smooth'
        });
    });
});

// Registration Form
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    const successModal = document.getElementById('success-modal');
    const closeModal = document.getElementById('close-modal');

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        setTimeout(() => {
            successModal.classList.remove('hidden');
            registrationForm.reset();
        }, 1000);
    });

    closeModal.addEventListener('click', () => {
        successModal.classList.add('hidden');
    });
});

// Navigation Active State
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
});