// Simple interactive function
function showMessage() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Contact here- manish2006007@gmail.com';
}

// Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

console.log('Welcome to my first web project!');
