document.addEventListener('DOMContentLoaded', function() {
    const startTelemedBtn = document.getElementById('startTelemed');
    
    if (startTelemedBtn) {
        startTelemedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would generate a unique Google Meet link
            // For demo purposes, we'll use a placeholder
            const meetLink = 'https://meet.google.com/new';
            
            // Show loading state
            startTelemedBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Connecting...';
            startTelemedBtn.disabled = true;
            
            // Simulate connection delay
            setTimeout(() => {
                // Redirect to Google Meet (in production, this would be a generated link)
                window.open(meetLink, '_blank');
                
                // Reset button state
                startTelemedBtn.innerHTML = 'Start Session';
                startTelemedBtn.disabled = false;
                
                // Close modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('telemedModal'));
                modal.hide();
            }, 1500);
        });
    }
});