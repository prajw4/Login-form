document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let isValid = true;

   
    document.querySelectorAll('.error').forEach(function(errorElement) {
        errorElement.remove();
    });

   
    let name = document.getElementById('name').value;
    if (!name) {
        showError('name', 'Name is required.');
        isValid = false;
    }

    // Validate phone number (mandatory and pattern)
    let phone = document.getElementById('phone').value;
    let phonePattern = /^\d{10}$/;
    if (!phone) {
        showError('phone', 'Phone number is required.');
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        showError('phone', 'Phone number must be 10 digits.');
        isValid = false;
    }

    let email = document.getElementById('email').value;
let emailPattern = /^(?!.*\.\.)(?!.*\.\@)(?!^\.)[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Ensure isValid is declared only once
if (typeof isValid === 'undefined') {
    //var isValid = true;
} else {
    isValid = true;
}

if (!email) {
    showError('email', 'Email address is required.');
    isValid = false;
} else if (!emailPattern.test(email)) {
    showError('email', 'Invalid email address. Please provide a properly formatted email.');
    isValid = false;
} else {
    clearError('email'); // Assuming you have a function to clear the error
}



    // Validate zip code (mandatory and pattern)
    let zip = document.getElementById('zip').value;
    let zipPattern = /^\d{5}(?:[-\s]\d{4})?$/;
    if (!zip) {
        showError('zip', 'Zip code is required.');
        isValid = false;
    } else if (!zipPattern.test(zip)) {
        showError('zip', 'Invalid zip code.');
        isValid = false;
    }

    // If form is valid, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('myForm').submit();
    }
});

function showError(inputId, message) {
    let inputElement = document.getElementById(inputId);
    let errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.innerText = message;
    inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
}