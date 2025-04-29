window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  });



// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Video background fallback
const videoBg = document.querySelector('.video-background video');
if (videoBg) {
    videoBg.addEventListener('error', function() {
        const videoContainer = this.parentElement;
        const fallbackImage = document.createElement('div');
        fallbackImage.style.backgroundImage = 'url("images/hero-fallback.jpg")';
        fallbackImage.style.position = 'absolute';
        fallbackImage.style.top = '0';
        fallbackImage.style.left = '0';
        fallbackImage.style.width = '100%';
        fallbackImage.style.height = '100%';
        fallbackImage.style.backgroundSize = 'cover';
        fallbackImage.style.backgroundPosition = 'center';
        videoContainer.appendChild(fallbackImage);
    });
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;
      
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(animateCounters, 1);
      } else {
        counter.innerText = target + '+';
      }
    });
  }
  
  // Initialize when section is in view
  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
      }
    });
  }).observe(document.querySelector('#about-us'));



// Handle notice box click to open booking modal
document.querySelector('.notice-box a').addEventListener('click', function(e) {
    e.preventDefault();
    const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
    bookingModal.show();
});

// This ensures proper cleanup when modal closes
document.getElementById('bookingModal').addEventListener('hidden.bs.modal', function () {
    document.querySelector('.modal-backdrop').remove();
    document.body.style.overflow = 'auto'; // Re-enable scrolling
    document.body.style.paddingRight = '0'; // Reset any padding added by Bootstrap
});

// FAQ Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = header.nextElementSibling;
        
        // Close all other items
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== accordionItem) {
                item.querySelector('.accordion-header').classList.remove('active');
                item.querySelector('.accordion-content').classList.remove('active');
            }
        });
        
        // Toggle current item
        header.classList.toggle('active');
        accordionContent.classList.toggle('active');
    });
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        alert(`Thank you for subscribing with ${emailInput.value}! You'll receive our health tips soon.`);
        emailInput.value = '';
    });
}

// Initialize AOS (Animate On Scroll) - Add this in the head of your HTML
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
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
