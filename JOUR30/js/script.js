const password = document.querySelector("#password");
const generate = document.querySelector(".btn1");
const btnCopy = document.querySelector(".btn2");

let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function passwordGenerator() {
    let passwordLength = 12;
    let passwordGen = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        passwordGen += chars[randomIndex];
    }

    //display result
    password.value = passwordGen;
}

generate.addEventListener('click', function(e) {
    btnCopy.classList.remove('copied')
    btnCopy.innerHTML = "Copy"

    e.preventDefault();
    passwordGenerator();
})

btnCopy.addEventListener("click", function(e) {
    e.preventDefault()
    password.select()
    document.execCommand('copy');

    btnCopy.innerHTML = "Copied !"
    btnCopy.classList.add('copied')



})