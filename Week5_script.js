document.addEventListener("DOMContentLoaded", function(){
    const passwordInput = document.getElementById("password");
    let passwordVisible = false;



    passwordInput.addEventListener("click", function() {
        if (!passwordVisible) {
            passwordInput.type = "password";
            passwordInput.style.backgroundColor = "lightgreen";
            passwordVisible = true;

        } else {
            passwordInput.type = "text";
            passwordInput.style.backgroundColor = "#FF5B47";
            passwordVisible = false;

        }
    });

});