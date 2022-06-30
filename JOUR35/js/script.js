let currentIndex = 1;
let slides;

setInterval(() => {
        displaySlides(currentIndex)
        currentIndex++
    },
    5000);

function displaySlides(num) {
    slides = document.getElementsByClassName('imgSlides');
    if (num > slides.length) {
        currentIndex = 1;
    }
    if (num < slides.length) {
        currentIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block"

}
//jgigrec323