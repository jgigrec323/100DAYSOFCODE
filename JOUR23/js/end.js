let scoreH2 = document.querySelector('.end-container h2');
let score = sessionStorage.getItem('score');
let username = document.querySelector('.username');
let save = document.querySelector('.save');

initScore();


save.addEventListener('click', function() {
    if (username.value != '') {
        saveScore();
        alert('Saved !');
        username.style.display = "none";
        scoreH2.style.display = "none";
    } else {
        alert("Veuillez saisir un nom d'utilisateur valide")
    }
})


function initScore() {

    scoreH2.innerText = `Score: ${score}`;

}

function saveScore() {
    localStorage.setItem(`${username.value}`, score);
    sessionStorage.removeItem('score');
}