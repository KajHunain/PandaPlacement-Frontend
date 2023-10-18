function passwordInput() {
    var password = document.getElementById("Password");
    var passwordHide = document.getElementById("passwordHide");
    var passwordUnhide = document.getElementById("passwordUnhide");

    if (password.type === 'password') {
        password.type = "text";
        passwordUnhide.style.display = "block";
        passwordHide.style.display = "none";
    } else {
        password.type = "password";
        passwordHide.style.display = "block";
        passwordUnhide.style.display = "none";
    }
}

function confirmPasswordInput() {
    var conPassword = document.getElementById("ConfirmPassword");
    var confirmPasswordHide = document.getElementById("confirmPasswordHide");
    var confirmPasswordUnhide = document.getElementById("confirmPasswordUnhide");

    if (conPassword.type === 'password') {
        conPassword.type = 'text';
        confirmPasswordHide.style.display = "block";
        confirmPasswordUnhide.style.display = "none";
    } else {
        conPassword.type = 'password';
        confirmPasswordHide.style.display = "none";
        confirmPasswordUnhide.style.display = "block";
    }
}

