// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form validation and submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form
    if (name === '' || email === '' || message === '') {
        showMessage('Please fill in all fields!', 'error');
        return;
    }

    // Validate email format
    if (!validateEmail(email)) {
        showMessage('Please enter a valid email address!', 'error');
        return;
    }

    // Validate message length
    if (message.length < 10) {
        showMessage('Message must be at least 10 characters long!', 'error');
        return;
    }

    // Success message
    showMessage(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon! ðŸŽ‰`, 'success');

    // Reset form
    contactForm.reset();
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show message function
function showMessage(msg, type) {
    formMessage.textContent = msg;
    formMessage.style.color = type === 'error' ? '#e74c3c' : '#27ae60';
    formMessage.style.display = 'block';

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Animate progress bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress');
            progressBars.forEach(bar => {
                bar.style.width = bar.style.width;
            });
        }
    });
}, observerOptions);

const skillsSection = document.getElementById('skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Add active nav link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.background = '';
        if (link.getAttribute('href').substring(1) === current) {
            link.style.background = 'rgba(255, 255, 255, 0.2)';
        }
    });
});

console.log('Portfolio website loaded successfully! Welcome, Manish! ðŸš€');
