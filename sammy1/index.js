// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        // Just for demo - usually scrolls to IDs
        console.log("Navigating to:", this.innerText);
    });
});

// Simple animation on scroll effect
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const speed = 2;
        const rect = card.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});