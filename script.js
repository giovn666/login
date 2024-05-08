document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const logoutContainer = document.getElementById('logoutContainer');
    const loggedInUser = document.getElementById('loggedInUser');
    const logoutBtn = document.getElementById('logoutBtn');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Assuming you have some authentication logic here (e.g., checking username/password)
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // For demo purposes, let's assume successful login if both fields are filled
        if (username && password) {
            // Show logout container and hide login form
            loginForm.style.display = 'none';
            logoutContainer.style.display = 'block';

            // Display logged-in username
            loggedInUser.textContent = username;
        } else {
            alert('Please enter both username and password.');
        }
    });

    logoutBtn.addEventListener('click', function() {
        // Reset the login form and show it again
        loginForm.reset();
        loginForm.style.display = 'block';
        
        // Hide logout container
        logoutContainer.style.display = 'none';
    });
});
