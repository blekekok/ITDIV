function validateLogin() {
    let emailInput = document.getElementById('email-input').value;
    let passwordInput = document.getElementById('password-input').value;

    if (emailInput == '' || 
        emailInput == undefined ||
        passwordInput == '' ||
        passwordInput == undefined) {
        alert('Both email and password need to be specified!');
        return false;
    }

    alert('Successfully logged in');
    return true;

}