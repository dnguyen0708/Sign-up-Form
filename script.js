const pw = document.querySelector("#password");
const confirmPW = document.querySelector("#confirm-password");
const form = document.querySelector("form");
const warningMsg = document.querySelector('#warningMsg');
const submit = document.querySelector(".submit");

const validatePassword = function (e) {

    if (pw.value !== confirmPW.value && pw.value.length >= 7) {
        e.preventDefault();
        pw.setCustomValidity("Passwords do not match!");
        pw.reportValidity();
        pw.style.borderColor = 'red';
        confirmPW.style.borderColor = 'red';
        // console.log("password do not match", pw.value, confirmPW.value)
        // warningMsg.textContent = "* Passwords do not match!";
    } else {
        pw.setCustomValidity("");
        // form.submit();
    }
}
console.log("this is validation branch");
submit.addEventListener('click', validatePassword);