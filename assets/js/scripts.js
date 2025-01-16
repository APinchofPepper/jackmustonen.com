// Modern Portfolio Scripts - Enhanced Version
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading bar
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loading-bar';
    document.body.appendChild(loadingBar);

    // Enhanced smooth scrolling with offset calculation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced Intersection Observer for animations
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '20px'
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class with delay based on index
                const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.1;
                entry.target.style.animationDelay = `${delay}s`;
                entry.target.classList.add('visible');
                
                // Add scale-in animation for cards
                if (entry.target.classList.contains('project-card') || 
                    entry.target.classList.contains('skill-card')) {
                    entry.target.classList.add('animate-scale-in');
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.animate-fade-up, .project-card, .skill-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });

    // Enhanced navigation highlight with smooth transitions
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    
    function updateNavigation() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${section.id}`) {
                        link.classList.add('active');
                        // Add subtle scale effect
                        link.style.transform = 'scale(1.05)';
                    } else {
                        link.classList.remove('active');
                        link.style.transform = 'scale(1)';
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', _.throttle(updateNavigation, 100));

    // Enhanced navbar scroll behavior
    const navbar = document.querySelector('nav');
    let lastScroll = 0;
    
    document.addEventListener('DOMContentLoaded', function() {
    // Enhanced navbar scroll behavior
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', _.throttle(() => {
        // Only add scrolled class for background change
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 100));

    // Enhanced project card interactions
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
            // Add parallax effect to card content
            const content = this.querySelector('.project-content');
            if (content) {
                content.style.transform = 'translateY(-5px)';
            }
        });

        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
            const content = this.querySelector('.project-content');
            if (content) {
                content.style.transform = 'translateY(0)';
            }
        });

        // Add tilt effect
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const tiltX = (y - centerY) / 20;
            const tiltY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // Enhanced skill card animations
    document.querySelectorAll('.skill-card').forEach((card, index) => {
        // Staggered animation delay
        card.style.animationDelay = `${index * 0.2}s`;
        
        // Add hover interaction
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Smooth reveal for timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.3}s`;
    });
});
