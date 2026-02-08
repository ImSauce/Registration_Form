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

// --- Password toggle
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

// --- Real-time password match check
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

password.addEventListener("input", checkPasswordMatch);
confirmPassword.addEventListener("input", checkPasswordMatch);

// --- Form submit: combined all previous handlers safely
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    // first, check native validity (required fields, patterns, etc.)
    if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
    }

    // check password match
    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        e.stopPropagation();
        confirmPassword.classList.add("is-invalid");
        confirmPassword.classList.remove("is-valid");
        confirmPassword.focus();
        form.classList.add('was-validated');
        return;
    }

    // all valid -> redirect
    e.preventDefault();
    window.location.href = "success.html";
});

//------------------------- startup Overlay
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("click-overlay");
    const mainContent = document.querySelector(".main-content");

    if (overlay) {
        overlay.addEventListener("click", () => {
            overlay.classList.add("fade-out");
            setTimeout(() => overlay.remove(), 1000);
        });
    }
});

//------------------------- countries selection
document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("countryList");
    if (!list) return;

    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
            const countries = data
                .map(c => c.name.common)
                .sort();

            countries.forEach(country => {
                const option = document.createElement("option");
                option.value = country;
                list.appendChild(option);
            });
        })
        .catch(err => console.error(err));
});
