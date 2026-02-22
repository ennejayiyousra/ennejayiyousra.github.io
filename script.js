// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeNavigation();
    initializeAnimations();
    initializeSkills();
    initializeTheme();
    initializeTypingEffect();
    initializeProjectCards();
});

// ========================================
// PARTICLES BACKGROUND
// ========================================
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#ff6b9d', '#c44569', '#a8dadc', '#98d8c8']
                },
                shape: {
                    type: ['circle', 'triangle', 'polygon'],
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ff6b9d',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'bounce',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ========================================
// NAVIGATION
// ========================================
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            if (hamburger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
        
        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            });
        });
    }
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Active link highlighting
    function highlightActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveLink);
}

// ========================================
// ANIMATIONS (AOS ENHANCEMENT)
// ========================================
function initializeAnimations() {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
            offset: 100,
            delay: 100
        });
    }
    
    // Add floating animation to shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 2}s`;
    });
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = -scrolled * 0.5;
            heroContent.style.transform = `translateY(${parallax}px)`;
        });
    }
    
    // Gradient blob animation enhancement
    const blobs = document.querySelectorAll('.gradient-blob');
    blobs.forEach((blob, index) => {
        blob.addEventListener('mousemove', (e) => {
            const rect = blob.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
            blob.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// ========================================
// SKILLS ANIMATION
// ========================================
function initializeSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target.getAttribute('data-skill');
                entry.target.style.setProperty('--skill-level', `${skillLevel}%`);
                entry.target.style.animation = 'fillBar 2s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    };
    
    const skillObserver = new IntersectionObserver(animateSkills, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
    
    // Floating icons animation
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach((icon, index) => {
        icon.style.animation = `float ${10 + index * 2}s infinite`;
        icon.style.animationDelay = `${index}s`;
    });
}

// ========================================
// THEME TOGGLE
// ========================================
function initializeTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
            
            // Add sparkle effect
            createSparkles(themeToggle);
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
            
            // Add sparkle effect
            createSparkles(themeToggle);
        }
    });
}

// ========================================
// SPARKLE EFFECT
// ========================================
function createSparkles(element) {
    const sparkleCount = 10;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: #ff6b9d;
            border-radius: 50%;
            pointer-events: none;
            animation: sparkleAnim 1s ease-out forwards;
            left: 50%;
            top: 50%;
        `;
        
        const angle = (i / sparkleCount) * Math.PI * 2;
        const distance = 30 + Math.random() * 20;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        sparkle.style.setProperty('--x', `${x}px`);
        sparkle.style.setProperty('--y', `${y}px`);
        
        element.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// Add sparkle animation to CSS dynamically
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnim {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--x), var(--y)) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

// ========================================
// NOTIFICATION SYSTEM
// ========================================
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #ff6b9d, #c44569);
        color: white;
        padding: 15px 25px;
        border-radius: 30px;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
        animation: slideInRight 0.5s ease;
        z-index: 10000;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// ========================================
// TYPING EFFECT ENHANCEMENT
// ========================================
function initializeTypingEffect() {
    const typewriterElement = document.querySelector('.typewriter h2');
    if (!typewriterElement) return;
    
    const texts = [
        'AI Engineer & Creative Developer',
        'Machine Learning Enthusiast',
        'Full Stack Developer',
        'Computer Vision Researcher',
        'Deep Learning Specialist'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterElement.innerHTML = `AI Engineer & <span class="gradient-text">${currentText.substring(14, charIndex)}</span>`;
            charIndex--;
            
            if (charIndex === 14) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500;
            } else {
                typingSpeed = 50;
            }
        } else {
            typewriterElement.innerHTML = `AI Engineer & <span class="gradient-text">${currentText.substring(14, charIndex)}</span>`;
            charIndex++;
            
            if (charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 2000;
            } else {
                typingSpeed = 100;
            }
        }
        
        setTimeout(typeWriter, typingSpeed);
    }
    
    // Start typing effect after initial animation
    setTimeout(typeWriter, 4000);
}

// ========================================
// PROJECT CARDS HOVER EFFECT
// ========================================
function initializeProjectCards() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'box-shadow 0.3s ease, transform 0s';
        });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = '';
            card.style.transform = '';
        });
    });
}

// ========================================
// SCROLL REVEAL ENHANCEMENTS
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax for floating shapes
    document.querySelectorAll('.floating-shapes .shape').forEach((shape, index) => {
        const speed = 0.5 + index * 0.1;
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.2}deg)`;
    });
    
    // Reveal timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            item.classList.add('revealed');
        }
    });
});

// ========================================
// EASTER EGG - KONAMI CODE
// ========================================
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s linear infinite';
    showNotification('🎉 Easter Egg Activated! 🦄✨');
    
    // Create confetti
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${['#ff6b9d', '#c44569', '#a8dadc', '#98d8c8', '#ffc3d0', '#e7c3ff'][Math.floor(Math.random() * 6)]};
        left: ${Math.random() * 100}vw;
        top: -10px;
        opacity: 1;
        transform: rotate(${Math.random() * 360}deg);
        animation: confettiFall 3s linear forwards;
        z-index: 10000;
    `;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 3000);
}

// Add confetti and rainbow animations
const easterEggStyle = document.createElement('style');
easterEggStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(easterEggStyle);