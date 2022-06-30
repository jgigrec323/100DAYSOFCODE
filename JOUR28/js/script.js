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

const email = document.querySelector('#email');
const testons = document.querySelector('.test');
testons.style.fontSize = 15 + 'px';
testons.style.marginTop = 5 + 'px';

email.addEventListener('input', function() {
    if (emailIsValid(email.value)) {
        testons.style.color = "green";
        testons.innerHTML = `Valid email`;
    } else {
        testons.style.color = "red";
        testons.innerHTML = `Invalid email`;
    }

})
if (email.value = "") {
    testons.innerHTML = "";
}

function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}