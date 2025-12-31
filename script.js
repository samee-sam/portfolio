// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.1)';
        nav.style.boxShadow = 'none';
    }
});

// Animation on Scroll (Optional)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});
// Function to check if element is in viewport for reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Trigger point

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

// Initial check on load
window.addEventListener("load", revealOnScroll);

// Check on scroll
window.addEventListener("scroll", revealOnScroll);

// Navbar styling on scroll
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(243, 229, 245, 0.9)";
        nav.style.backdropFilter = "blur(10px)";
        nav.style.padding = "10px 0";
        nav.style.boxShadow = "0 2px 15px rgba(0,0,0,0.05)";
    } else {
        nav.style.background = "transparent";
        nav.style.padding = "20px 0";
        nav.style.boxShadow = "none";
    }
});