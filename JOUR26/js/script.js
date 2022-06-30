const home_container = document.querySelector('.home-container');
const loader = document.querySelector('.loader');

home_container.style.display = "none";

setTimeout(() => {
    preload();
}, 1000);

function preload() {

    loader.style.display = "none";
    home_container.style.display = "block";
}