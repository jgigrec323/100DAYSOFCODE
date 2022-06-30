const progresser = document.querySelector('.progresser');
const score_displayer = document.querySelector('.score-displayer');
const question_displayer = document.querySelector('.question');
const answer_tab = document.querySelectorAll('.answer');
let score = 0;
let nbre_question = 5;
let currentQuestionText = document.querySelector('.evolution h5');
let game_container = document.querySelector('.game-container');
let wrong = new Audio('js/error.wav');
let correct = new Audio('js/true.wav');


const answer_options = document.querySelector('.answers-options');
let currentQuestion = 1;

initialisation()

let url = `https://quizapi.io/api/v1/questions?apiKey=5uCMIOANqkTuF1orgr6sIwLQ8EPZALel6gxaLOB0&limit=${nbre_question}
`

fetch(url).then(response => response.json()).then(result => {
    affic(result);
    //updateScore(true, currentQuestion, result)
    //console.log(result)
}).catch((err) => {
    console.log(err)
});



function affic(result) {
    if (currentQuestion <= nbre_question) {
        question_displayer.innerText = result[currentQuestion - 1].question;
        let answers = Object.values(result[currentQuestion - 1].answers);
        //lire tout le tab et trouver la truth
        let trueAnswers = result[currentQuestion - 1].correct_answers;
        let indexTruth = isTrue(trueAnswers);
        //console.log(indexTruth)
        let letters = ["A", "B", "C", "D"];

        for (let i = 0; i <= 3; i++) {
            if (answers[i] != null) {
                let div = document.createElement('div');
                if (i == indexTruth) {
                    div.classList.add('true');
                }

                div.innerHTML = `<span class="answers-picker">${letters[i]}</span> <span class="answer">${answers[i].toString()}</span>`;
                answer_options.appendChild(div);

            }

        }
        const answer_tab_div = document.querySelectorAll('.answers-options div');
        answer_tab_div.forEach(el => {
            el.addEventListener('click', function(e) {

                checkAnswers(e);
                currentQuestion++;
                changement()
                removeAll();
                affic(result)




            })
        });

        //console.log(trueAnswers)
    } else {
        saveScoreDefault(score);
        game_container.style.display = "none";
        let gif = document.createElement('div');
        gif.innerHTML = `<img src="img/ZZ5H.gif" alt="">`;
        document.body.appendChild(gif)
        setTimeout(() => {
            window.location.href = "http://127.0.0.1:5500/JOUR23/end.html";
        }, 800);


    }

}
//el.target.parentElement el.target.classList
function saveScoreDefault(score) {
    sessionStorage.setItem('score', score);
}

function removeAll() {
    answer_options.innerHTML = '';


}

function checkAnswers(el) {
    console.log(el)
    if (el.target.localName == 'div') {
        if (el.target.classList == 'true') {
            console.log('trouvé');
            score++;
            correct.play();

        } else {
            wrong.play();
        }
    } else {
        if (el.target.parentElement.classList == 'true') {
            console.log('aussi')
            score++;
            correct.play();

        } else {
            wrong.play();
        }
    }
}

function changement() {

    score_displayer.innerText = score;
    progresser.style.width = ((currentQuestion * 100) / nbre_question) + "%";
    currentQuestionText.innerText = `Question ${currentQuestion}/5`;
}

function isTrue(obj) {
    let tabObj = Object.values(obj);
    let index = 0;

    for (let i = 0; i <= tabObj.length; i++) {
        if (tabObj[i] == "true") {
            index = i;
        }
    }
    return index;
}




function initialisation() {
    score = 0;
    currentQuestion = 1;
    score_displayer.innerText = score;
    progresser.style.width = `${(currentQuestion*100)/nbre_question}%`;
}