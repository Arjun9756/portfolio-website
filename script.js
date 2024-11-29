// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
});

// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#3b82f6' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#3b82f6',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

// Typing Animation
const typed = new Typed('#typing-text', {
    strings: ['Frontend Developer', 'UI/UX Designer', 'Problem Solver'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// AOS Animation
AOS.init({
    duration: 1000,
    once: true
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-opacity-95');
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('bg-opacity-95');
        nav.classList.remove('shadow-lg');
    }
});

// Project filter functionality
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        const projectCategory = project.dataset.category;
        if (category === 'all' || projectCategory === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Parallax effect
document.addEventListener('mousemove', function(e) {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// Contact Form Handling
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;

        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                // Show success message
                contactForm.innerHTML = `
                    <div class="text-center py-12">
                        <i class="fas fa-check-circle text-6xl text-green-500 mb-4"></i>
                        <h3 class="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                        <p class="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                    </div>
                `;
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
            alert('Sorry, there was an error sending your message. Please try again.');
        }
    });
}
