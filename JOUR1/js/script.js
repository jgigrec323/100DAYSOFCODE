//Definitions des variables
let hex__code = document.querySelector(".hex__code");
const clickMe = document.querySelector(".clickMe");
const body = document.querySelector("body");
const hex__table = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


//L'événement sur le click
clickMe.addEventListener("click", function() {

    let hex__key = "#";

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hex__table.length);
        hex__key += hex__table[index];
    }

    hex__code.innerHTML = hex__key;
    body.style.backgroundColor = hex__key;
    body.style.transition = "1s";

})