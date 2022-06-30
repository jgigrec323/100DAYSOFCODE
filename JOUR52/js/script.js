const stars = document.querySelectorAll('.star');
const ratingtext = document.querySelector('.ratingtext');

stars.forEach((star, i) => {
    star.addEventListener("click", () => {
        const current_star = i + 1;

        ratingtext.innerText = `${current_star} of 5`;
        stars.forEach((star, j) => {
            if (current_star >= j + 1) {
                star.innerHTML = "&#9733";

            } else {
                star.innerHTML = "&#9734";
            }
        })
    });
})