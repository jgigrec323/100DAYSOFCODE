const check = document.querySelector('.check');
const income = document.querySelector('.incomeVal');
let msg = document.querySelector('.display');
let container = document.querySelector('.container')
msg.innerText = "";

check.addEventListener('click', function() {
    container.classList.remove('green');
    container.classList.remove('red');
    let re = /^A-Za-z0-9/g,
        val = income.value;
    val = val.toLowerCase();

    if (string_checker(val.split(" ").join("")) == true) {
        msg.innerHTML = `<strong>${val}</strong> is a palindrome`;
        container.classList.add('green');
    } else {
        msg.innerHTML = `<strong>${val}</strong> is not a palindrome`;
        container.classList.add('red');
    }


})

function string_checker(str) {
    let i = 0,
        j = 0,
        state = false,
        reversedW = "";

    for (i = str.length - 1; i >= 0; i--) {
        reversedW += str[i];
    }

    if (reversedW == str) {
        state = true;
    }

    return state;
}