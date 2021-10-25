function validateRegister() {
    let nameInput =  document.getElementById('fullname-input').value;
    let emailInput = document.getElementById('email-input').value;
    let genderInput = document.querySelector('input[name="gender-input"]:checked')?.value;
    let cityInput = document.getElementById('city-input').value;
    let passwordInput = document.getElementById("password-input").value;
    let confirmPasswordInput = document.getElementById("confirm-password-input").value

    let emailRegex = /[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+/;

    if (nameInput == '' || nameInput == undefined) {
        alert('You cannot leave the name empty');
        return false;
    }

    if (emailInput == '' || emailInput == undefined) {
        alert('You cannnot leave the email empty');
        return false;
    }

    if (!emailRegex.test(emailInput)) {
        alert('Invalid email format');
        return false;
    }

    if (genderInput == undefined) {
        alert('You must specify a gender')
        return false;
    }

    if (cityInput == undefined) {
        alert('You must specify a city');
        return false;
    }

    if (passwordInput == undefined || passwordInput == '' ||
        confirmPasswordInput == undefined || confirmPasswordInput == '') {
        alert('Both password and confirm password fields needs to be filled');
        return false;
    }

    if (passwordInput != confirmPasswordInput) {
        alert('Password does not match');
        return false;
    }

    alert('Successfully registered');
    return true;

}