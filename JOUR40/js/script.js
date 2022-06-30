const send = document.getElementById('send');

send.addEventListener('click', function() {
    const msg = document.getElementById('message');
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');

    checker(msg)
    checker(name)
    checker(phone)

})

function checker(el) {
    if (el.value = null) {
        el.classList.add('red');
        alert(`Veuillez remplir le champ ${el}`);
    } else {
        console.log('he')
    }
}