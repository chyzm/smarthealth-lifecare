document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const formData = new FormData(bookingForm);
            const formValues = Object.fromEntries(formData.entries());
            
            // Check required fields
            if (!formValues.name || !formValues.email || !formValues.phone || !formValues.specialty || !formValues.date || !formValues.time) {
                showAlert('Please fill in all required fields', 'danger');
                return;
            }
            
            // Simulate booking submission
            showAlert('Your appointment request has been submitted successfully! Our team will contact you shortly to confirm.', 'success');
            
            // Close modal after 3 seconds
            setTimeout(() => {
                const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
                modal.hide();
                bookingForm.reset();
            }, 3000);
        });
    }
});

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const modalBody = document.querySelector('#bookingModal .modal-body');
    const existingAlert = modalBody.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    modalBody.appendChild(alertDiv);
}