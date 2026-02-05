
//--------------- Form Validation Green or Red indicator
document.querySelectorAll('.form-control, .form-select').forEach(input => {

    input.addEventListener('input', () => {
        // if empty -> no color
        if (input.value.trim() === '') {
        input.classList.remove('is-valid', 'is-invalid')
        return
        }

        // if not empty -> check validity
        if (input.checkValidity()) {
        input.classList.add('is-valid')
        input.classList.remove('is-invalid')
        } else {
        input.classList.add('is-invalid')
        input.classList.remove('is-valid')
        }
    })

})






//--------------- Password Toggle
function togglePassword() {
    const passwordInput = document.getElementById("password");
    const icon = document.getElementById("toggleIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.replace("bi-eye", "bi-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.replace("bi-eye-slash", "bi-eye");
    }
}


//--------------- Confirm Password
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function checkPasswordMatch() {
    if (confirmPassword.value === "") {
        confirmPassword.classList.remove("is-valid", "is-invalid");
        return;
    }

    if (password.value === confirmPassword.value) {
        confirmPassword.classList.remove("is-invalid");
        confirmPassword.classList.add("is-valid");
    } else {
        confirmPassword.classList.remove("is-valid");
        confirmPassword.classList.add("is-invalid");
    }
}

// check while typing
password.addEventListener("input", checkPasswordMatch);
confirmPassword.addEventListener("input", checkPasswordMatch);







//-------------- redirect to sucess.html when clicking the submit button
document.querySelector("form").addEventListener("submit", function (e) {
  if (!this.checkValidity()) return;

  e.preventDefault(); // stop actual submit
  window.location.href = "success.html";
});






//-------------------- button click on register and checks if all fields are filled correctly
(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {

        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')

        }, false)
    })
})()







//------------------------- startup Overlay
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("click-overlay");
    const mainContent = document.querySelector(".main-content");

    overlay.addEventListener("click", () => {
        // fade out 
        overlay.classList.add("fade-out");

        // remove overlay from DOM after animation
        setTimeout(() => overlay.remove(), 1000);
    });
});
