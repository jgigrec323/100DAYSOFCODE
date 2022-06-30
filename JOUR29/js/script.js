const eye = document.querySelector('.password i');
const password = document.querySelector("#password");
eye.classList.add('fa-eye-slash');
let state = true; //true=visible, false=non visible


eye.addEventListener("click", function(e) {
    e.preventDefault();

    if (state == false) {
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
        password.setAttribute("type", "password");
        state = true;

    } else {
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
        password.setAttribute("type", "text");
        state = false;
    }

})
let timeout;
let progress_checker = document.querySelector('.progress-checker')
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

function StrengthChecker(passwordParameter) {
    if (strongPassword.test(passwordParameter)) {
        progress_checker.style.backgroundColor = "green";
        progress_checker.style.width = 100 + "%";
        progress_checker.textContent = 'Strong'
    } else if (mediumPassword.test(passwordParameter)) {
        progress_checker.style.backgroundColor = "blue";
        progress_checker.style.width = 50 + "%";
        progress_checker.textContent = 'Medium'
    } else {
        progress_checker.style.backgroundColor = "red"
        progress_checker.style.width = 15 + "%";
        progress_checker.textContent = 'Weak'
    }
}
password.addEventListener('input', function() {

    progress_checker.style.opacity = 1;
    clearTimeout(timeout);

    timeout = setTimeout(() => {
        StrengthChecker(password.value)
    }, 500);

    //cacher le progress_check au cas ou il supprime encore des valeurs
    if (password.value.length !== 0) {
        progress_checker.style.opacity = 1;
    } else {
        progress_checker.style.opacity = 0;
    }
})