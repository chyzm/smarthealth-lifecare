     // Form validation
     (function () {
        'use strict'
        
        // Fetch the form we want to apply custom Bootstrap validation styles to
        const form = document.getElementById('contactForm')
        
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                // Form submission would go here
                event.preventDefault()
                alert('Thank you for your message! We will contact you soon.')
                form.reset()
                form.classList.remove('was-validated')
            }
            
            form.classList.add('was-validated')
        }, false)
    })()
    
    // Initialize AOS animations
    document.addEventListener('DOMContentLoaded', () => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    });