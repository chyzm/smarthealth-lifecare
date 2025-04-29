window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  });

// Initialize AOS animation with better settings
AOS.init({
    duration: 800,
    easing: 'ease-in-out-quart',
    once: true,
    mirror: false,
    offset: 120
});

// Improved counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 100; // Faster animation
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if(count < target) {
            counter.innerText = Math.ceil(count + increment);
            requestAnimationFrame(animateCounters);
        } else {
            counter.innerText = target.toLocaleString(); // Adds commas for large numbers
        }
    });
}

// Start counter animation when stats section is in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target); // Stop observing after triggering
        }
    });
}, {threshold: 0.5});

const statsSection = document.querySelector('.stats-section');
if(statsSection) {
    statsObserver.observe(statsSection);
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    
    // Toggle menu
    if(navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close menu
    if(closeMenuBtn) {
        closeMenuBtn.addEventListener('click', function() {
            navbarCollapse.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close menu when clicking on nav links
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navbarCollapse.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    });
});

// Back to Top
const backToTopButton = document.getElementById('backToTop');
if (backToTopButton) {
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }
  });

  backToTopButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
