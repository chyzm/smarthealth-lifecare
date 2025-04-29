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
