const pw = document.querySelector("#password");
const confirmPW = document.querySelector("#confirm-password");
const form = document.querySelector("form");
const warningMsg = document.querySelector('#warningMsg');
const submit = document.querySelector(".submit");
const pwErrorMsg = document.querySelector('.pwError');
const confirmPWErrorMsg = document.querySelector(".confirmPWError");
const emailErrorMsg = document.querySelector('.emailError');
const email = document.querySelector('#email');
const country = document.querySelector("#country");
const zip = document.querySelector('#zipcode');
const countryErrorMsg = document.querySelector(".countryError");
const zipErrorMsg = document.querySelector('.zipError');
const phoneNumber = document.querySelector('#phone')


const validateConfirmPw = function () {
    if (pw.value !== confirmPW.value) {
        checkConfirmPW();
    } else {
        confirmPW.style.borderColor = "green";
        confirmPWErrorMsg.className = "error pwError";
    }
}
const validatePW = function () {
    if (pw.validity.valid) {
        pwErrorMsg.className = "error pwError";
        pw.style.borderColor = "green";
    } else {
        checkpw();
    }
}
function checkpw() {
    if (pw.validity.tooShort || pw.validity.valueMissing) {
        pw.style.borderColor = "red";
        pwErrorMsg.className = "error pwError active";
        pwErrorMsg.textContent = `password must be 7 or more characters! you enter ${pw.value.length} characters`;
    }
}
function checkConfirmPW() {
    if (pw.value !== confirmPW.value || confirmPW.validity.valueMissing) {
        confirmPW.style.borderColor = "red";
        confirmPWErrorMsg.textContent = "Password Do Not Match!";
        confirmPWErrorMsg.className = "error pwError active";
    }
}
function formValidation(e) {
    if (!pw.validity.valid) {
        checkpw();
    }
    if (!confirmPW.validity.valid) {
        checkConfirmPW();
    }
    if (!email.validity.valid) {
        checkEmail();
    }
    if (!country.validity.valid) {
        checkCountry();
    }
    if (!zip.validity.valid) {
        checkZip();
    }

    e.preventDefault();
}
function validateEmail() {
    if (email.validity.valid) {
        emailErrorMsg.className = "error emailError";
        email.style.borderColor = "green";
    } else {
        checkEmail();
    }
}
function checkEmail() {
    email.style.borderColor = "red";
    emailErrorMsg.className = "error emailError active";
    if (email.validity.typeMismatch) {
        emailErrorMsg.textContent = "please enter a valid email";
    }
    else if (email.validity.valueMissing) {
        emailErrorMsg.textContent = "please enter an email";
    }
}
function validateCountry() {
    if (country.validity.valid) {
        countryErrorMsg.className = "error countryError";
        country.style.borderColor = "green";
    } else {
        checkCountry();
    }
}
function validateZip() {
    if (zip.validity.valid) {
        zipErrorMsg.className = "error zipError";
        zip.style.borderColor = "green";
    } else {
        checkZip();
    }
}
function checkCountry() {
    country.style.borderColor = "red";
    countryErrorMsg.className = "error countryError active";
    if (country.validity.valueMissing) {
        countryErrorMsg.textContent = "please enter a country"
    }
}
function checkZip() {
    zip.style.borderColor = "red";
    zipErrorMsg.className = "error zipError active";
    if (zip.validity.patternMismatch) {
        zipErrorMsg.textContent = "zip must be 5 or more numbers!"
    }
    else if (zip.validity.valueMissing) {
        zipErrorMsg.textContent = "please enter a zipcode!"
    }
}

pw.addEventListener("input", validatePW);
confirmPW.addEventListener('input', validateConfirmPw);
form.addEventListener('submit', formValidation);
email.addEventListener('input', validateEmail);
country.addEventListener('input', validateCountry);
zip.addEventListener('input', validateZip);
console.log(zip.value.length);