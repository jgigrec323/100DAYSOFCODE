let scores = Object.values(localStorage);
let usernames = Object.keys(localStorage);

let hs_container_div_output = document.querySelector('.hs-container div');

for (let i = 0; i <= scores.length; i++) {
    if (scores[i] != undefined) {
        let div = document.createElement('div');
        div.innerHTML = `<div class="score-element">
        <span class="user">${usernames[i]}</span>
        <span class="hisScore">${scores[i]}</span>
    </div>`;
        hs_container_div_output.appendChild(div)
    }


}