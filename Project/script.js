document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#login');

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById('email');
        const pin = document.getElementById('Pin');

        const validEmail = "admin@example.com";
        const validPassword = "password123";

        if (validEmail === email.value && validPassword === pin.value) {
            window.location.href = "MyFirstDay.html"; 
        } else {
            alert("Invalid email or password");
        }
    });
});
