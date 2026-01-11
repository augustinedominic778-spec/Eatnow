// Toggle password visibility
function togglePass(fieldId) {
    const field = document.getElementById(fieldId);
    const icon = field.nextElementSibling;
    
    if (field.type === "password") {
        field.type = "text";
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        field.type = "password";
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

// Simple Handle Submit
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const action = form.id === 'loginForm' ? 'Logging in...' : 'Creating Account...';
        
        // Change button state
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = action;
        btn.style.opacity = '0.7';

        // Simulate API call
        setTimeout(() => {
            alert(form.id === 'loginForm' ? "Welcome back to EatNow!" : "Account created successfully!");
            btn.innerText = originalText;
            btn.style.opacity = '1';
        }, 1500);
    });
});