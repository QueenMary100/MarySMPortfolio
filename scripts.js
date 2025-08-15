// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        navLinks.classList.remove('active');
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// // Form submission
// document.querySelector('.contact-form').addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     // Get form data
//     const formData = new FormData(e.target);
//     const name = formData.get('name');
//     const email = formData.get('email');
//     const subject = formData.get('subject');
//     const message = formData.get('message');
    
//     // Simulate form submission
//     alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`);
    
//     // Reset form
//     e.target.reset();
// });

btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    btn.innerText = "Sending...";

    const serviceID = 'default_service';
    const templateId ='template_kpokmlq';

    emailjs.sendForm(serviceID, templateId, this)
        .then(() =>{
            btn.value = "Send Message";
            alert("Message sent successfully!");
        }, (err) => {
            btn.value = "Send Message";
            alert(JSON.stringify(err));
        });
});

// Add loading animation to project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});