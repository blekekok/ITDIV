function validateLogin() {
    let emailInput = document.getElementById("email-input");
    let passwordInput = document.getElementById("password-input");

    if (emailInput.value == '' || passwordInput.value == '') {
        alert('Both email and password need to be specified!');
        return false;
    }

}