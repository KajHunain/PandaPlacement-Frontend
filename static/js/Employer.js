function password() {
    var password = document.getElementById("enterPassword");
    var passwordHide = document.getElementById("passHide");
    var passwordUnhide = document.getElementById("passUnhide");

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
