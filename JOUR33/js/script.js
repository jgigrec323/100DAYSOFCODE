const burger = document.querySelector('.burger');
const links = document.querySelectorAll('li a')
const container = document.querySelector('.container')
const logo = document.querySelector('.logo h1');
let state = false;


//initialisation();

burger.addEventListener('click', function() {
    displayer();
    state = true;

})
logo.addEventListener('click', function() {
    displayer();
    state = false;

})

function initialisation() {
    container.style.alignItems = "center";
}

function displayer() {

    if (!state) {
        burger.style.display = "none";
        logo.style.display = "block";
    } else {
        logo.style.display = "none";
        burger.style.display = "block";
    }



    links.forEach(element => {
        element.classList.toggle('affic');
    });
}