const flip = document.querySelector('.flip'),
    reset = document.querySelector('.reset');
const imgs = document.querySelector('.imgs');
const coin = new Audio("js/coin2.mp3")

const faceS = document.querySelector('.faceS'),
    backS = document.querySelector('.backS');
let headS = tailS = 0;
initialisation();



flip.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    imgs.style.animation = "none";
    setTimeout(coin.play(), 3000);


    if (i) {
        setTimeout(function() {
            imgs.style.animation = "spin-heads 4s forwards";
        }, 100);
        headS++;
    } else {
        setTimeout(function() {
            imgs.style.animation = "spin-tails 4s forwards";
        }, 100);
        tailS++;
    }
    setTimeout(updateStats, 3000);
    disableBtn();
})

reset.addEventListener("click", () => {
    headS = 0;
    tailS = 0;
    initialisation();
})



function initialisation() {
    faceS.innerHTML = `Heads: ${headS}`
    backS.innerHTML = `Tails: ${tailS}`
}

function updateStats() {
    faceS.innerHTML = `Heads: ${headS}`
    backS.innerHTML = `Tails: ${tailS}`
}

function disableBtn() {
    flip.disabled = true;
    setTimeout(function() {
        flip.disabled = false;
    }, 3000);
}