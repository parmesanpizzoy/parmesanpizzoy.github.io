function validateForm() {
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('genderError').innerText = '';
    document.getElementById('dobError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('termsError').innerText = '';

    let isValid = true;

    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    }

    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        document.getElementById('emailError').innerText = 'Email is required.';
        isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').innerText = 'Please enter a valid email.';
        isValid = false;
    }

    const gender = document.getElementById('gender').value;
    if (gender === '') {
        document.getElementById('genderError').innerText = 'Please select your gender.';
        isValid = false;
    }

    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    
    if (dob === 'Invalid Date' || dob > today) {
        document.getElementById('dobError').innerText = 'Please enter a valid date of birth.';
        isValid = false;
    } else if (age < 18 || (age === 18 && monthDifference < 0)) {
        document.getElementById('dobError').innerText = 'You must be at least 18 years old to join.';
        isValid = false;
    }

    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').innerText = 'You must agree to the terms and conditions.';
        isValid = false;
    }

    return isValid;
}
