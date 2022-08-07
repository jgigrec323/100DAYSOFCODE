const word = document.querySelector('.word')
const btnSubmit = document.querySelector('.btnSubmit')
const btnReset = document.querySelector('.btnReset')
const guessInput = document.querySelector('.guessInput')
let score = 0;
const badge = document.querySelector('.badge')
const scoreInput = document.querySelector('.score')


//Generating a random word
const randomWord = (tab) => {
        let randomIndex = Math.floor(Math.random() * tab.length)
        return tab[randomIndex]
    }
    //Shuffle Array
const shuffleArray = (arr) => {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1)); //random index
            [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
        }
    }
    //functions that return the scrambleW
const scramblingWord = (word) => {
    console.log(word)
    let scrambleW = "";
    let extractedLetters = word.split('')
    shuffleArray(extractedLetters)
    extractedLetters.forEach(el => {
        scrambleW += el;
    });
    return [scrambleW, word];
}

const display = () => {
    let wordsOption = scramblingWord(randomWord(wordsList))
    word.innerText = wordsOption[0];
    let rightWord = wordsOption[1];
    scoreInput.innerText = `${score}`

    btnSubmit.addEventListener('click', function() {
        if (guessInput.value == "") {
            alert('Enter a valid word')
            return false;
        } else {
            let userGuessWord = guessInput.value;

            if (userGuessWord === rightWord) {
                console.log("trouvé")
                score++
                badge.innerText = "Correct"
                badge.classList = 'badge correct'

            } else {
                badge.innerText = "Incorrect"
                badge.classList.add('incorrect')

                console.log("raté")
            }

            setTimeout(() => {
                display()
                guessInput.value = ""
                badge.innerText = ""
                badge.classList = "badge"
            }, 1000);
        }
    })
    btnReset.addEventListener("click", function() {
        score = 0;
        display()
    })
}




display()