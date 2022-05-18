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