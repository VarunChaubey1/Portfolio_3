document.addEventListener('DOMContentLoaded', () => {
    // Loader
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('active');
    });

    // Smooth Scroll for Nav Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            gsap.to(window, { duration: 1, scrollTo: { y: targetId, offsetY: 70 } });
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('open');
                navLinks.classList.remove('active');
            }
        });
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    gsap.from('.hero-text', {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power2.out',
        delay: 0.5
    });

    gsap.from('.hero-visual', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'power2.out',
        delay: 0.7
    });

    // Section Title Animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Experience Cards Animation
    gsap.utils.toArray('.exp-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Skills Animation
    gsap.utils.toArray('.skill-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.out'
        });

        const progressFill = card.querySelector('.progress-fill');
        const percentage = card.querySelector('.progress-percentage');
        const percentageValue = parseInt(card.querySelector('.progress-bar').getAttribute('data-percentage'));

        gsap.from(progressFill, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            width: 0,
            duration: 1.2,
            ease: 'power2.out',
            onUpdate: function() {
                const progress = Math.round(this.progress() * percentageValue);
                progressFill.style.width = `${progress}%`;
                percentage.textContent = `${progress}%`;
            },
            onComplete: function() {
                progressFill.style.width = `${percentageValue}%`;
                percentage.textContent = `${percentageValue}%`;
            }
        });
    });

    // Certifications Animation
    gsap.utils.toArray('.cert-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Projects Slider Animation
    gsap.utils.toArray('.project-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: 50,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Achievements Slider Animation
    gsap.utils.toArray('.achievement-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: 50,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Contact Section Animation
    gsap.from('.connect-container', {
        scrollTrigger: {
            trigger: '.connect-container',
            start: 'top 85%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    });

    // Slider Navigation
    document.querySelectorAll('.slider-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const slider = btn.parentElement.querySelector('.project-slider, .achievement-slider');
            const direction = btn.classList.contains('next-btn') ? 1 : -1;
            const cardWidth = slider.querySelector('.project-card, .achievement-card').offsetWidth + 24; // Including gap
            slider.scrollBy({ left: cardWidth * direction, behavior: 'smooth' });
        });
    });

    // Lightbox Functionality
    window.openLightbox = (src, caption) => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        lightboxImg.src = src;
        lightboxCaption.textContent = caption;
        lightbox.style.display = 'flex';
        gsap.from(lightboxImg, { opacity: 0, scale: 0.8, duration: 0.5, ease: 'power2.out' });
        gsap.from(lightboxCaption, { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out', delay: 0.2 });
    };

    window.closeLightbox = () => {
        const lightbox = document.getElementById('lightbox');
        gsap.to(lightbox, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                lightbox.style.display = 'none';
                document.getElementById('lightbox-img').src = '';
                document.getElementById('lightbox-caption').textContent = '';
            }
        });
    };
});