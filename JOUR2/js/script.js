let light__img = document.querySelector(".light__img");
let state = false;

light__img.addEventListener("click", function(e) {
    if (!state) {
        this.src = "https://raw.githubusercontent.com/JS-Beginners/lightbulb-effect-project/main/lighton.png";
        state = true;
    } else {
        this.src = "https://raw.githubusercontent.com/JS-Beginners/lightbulb-effect-project/main/lightoff.png";
        state = false;
    }
})