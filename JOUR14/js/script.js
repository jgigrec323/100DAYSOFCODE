const btn_plus = document.querySelector('.fa-plus');
const btn_minus = document.querySelector('.fa-minus');
let counter_h2 = document.querySelector('.counter h2');
let counter_p = document.querySelector('.container p');

let counter_h2_val;
let decrease;
initialisation();
let state = true;
let audio = new Audio('js/Alarm-Clock.mp3');


btn_plus.addEventListener("click", function() {
    counter_p.style.display = "block";
    counter_h2_val++;
    counter_h2.innerText = counter_h2_val;
    if (state == true) {
        clearInterval(decrease)

    }



});
btn_minus.addEventListener("click", function() {
    if (counter_h2_val != 0) {
        //alert(counter_h2_val)
        counter_h2_val--;
        counter_h2.innerText = counter_h2_val;
    } else if (counter_h2_val == 0) {
        /* console.log('d') */
        clearInterval(decrease)

        audio.play();
    }

});


window.addEventListener("keydown", function(e) {
    console.log(state);
    counter_p.style.display = "none";
    if (e.keyCode == 13 && state == true) {
        decrease = setInterval(() => {
            btn_minus.click();
        }, 1000);

    }
    //console.log(state)
})






function initialisation() {
    counter_h2.innerText = 0;
    counter_h2_val = Number(counter_h2.innerText);
    counter_p.style.display = "none";
}