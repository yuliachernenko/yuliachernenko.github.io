
const registrationForm = document.getElementById('registrationForm');

function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}
        
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();  
    

    if (!username) {
        displayError('Name field is required.')
                return;
    }

    if (!email || !isValidEmail(email)) {
        displayError('Please enter a valid email address.')
                return;
    }

    if (!password || !isValidPassword(password)) {
        displayError('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.')
                return;
    }
    errorMessages.innerHTML = "";
});

const errorMessages = document.getElementById('errorMessages');
        function displayError(message) {
            errorMessages.innerHTML += `<div class="error">${message}</div>`;
        }


