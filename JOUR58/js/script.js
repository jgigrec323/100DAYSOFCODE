class Game {
    constructor() {
        this.playGame();

    }
    playGame() {
        const rock = document.querySelector('.rock');
        const paper = document.querySelector('.paper');
        const scissors = document.querySelector('.scissors');
        const movesLeft = document.querySelector('.movesLeft');
        const chooseUrMove = document.querySelector('.moves h4');
        const displayChoices = document.querySelector('.displayChoices');
        const playerOptionsBlock = document.querySelector('.playerOptions');
        const userChoiceOptions = [rock, paper, scissors];
        const cptChoiceOptions = ['rock', 'paper', 'scissors'];

        let moves = 10;

        userChoiceOptions.forEach(option => {
            option.addEventListener("click", (e) => {
                this.winner(option.className.toString(), cptChoiceOptions)
                moves--;
                movesLeft.innerText = `Moves left: ${moves}`;

                if (moves == 0) {
                    chooseUrMove.innerText = `Game Over !`
                    movesLeft.style.display = "none";
                    displayChoices.style.display = "none"
                    playerOptionsBlock.style.display = "none";
                    this.gameWinner();
                }
            })
        });

        movesLeft.innerText = `Moves left: ${moves}`;
    }

    winner(userChoice, computerChoices) {

        const result = document.querySelector('.result')

        let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]

        console.log({ user: userChoice, cpt: computerChoice })
        userChoice.toUpperCase();

        this.displayChoices(userChoice, computerChoice)

        if (userChoice === computerChoice) {
            result.innerText = "Tied";
        } else if (userChoice == 'rock') {
            if (computerChoice == 'paper') {
                result.textContent = 'Computer Won';

                this.displayScores("computer")
            } else {
                result.textContent = 'Player Won'
                this.displayScores("player")
            }
        } else if (userChoice == 'scissors') {
            if (computerChoice == 'rock') {
                result.textContent = 'Computer Won';
                this.displayScores("computer")
            } else {
                result.textContent = 'Player Won';
                this.displayScores("player")
            }
        } else if (userChoice == 'paper') {
            if (computerChoice == 'scissors') {
                result.textContent = 'Computer Won';
                this.displayScores("computer")
            } else {
                result.textContent = 'Player Won';
                this.displayScores("player")
            }
        }
    }
    displayScores(winner) {
        const playerBoard = document.querySelector('.playerScore');
        let playerCurrentScore = Number(playerBoard.innerText)

        const computerBoard = document.querySelector('.computerScore')
        let computerCurrentScore = Number(computerBoard.innerText)

        if (winner == 'player') {
            playerCurrentScore++;
            playerBoard.innerText = playerCurrentScore;
        } else {
            computerCurrentScore++;
            computerBoard.innerText = computerCurrentScore;
        }
    }
    gameWinner() {
        let playerCurrentScore = Number(document.querySelector('.playerScore').innerText)
        let computerCurrentScore = Number(document.querySelector('.computerScore').innerText)
        const result = document.querySelector('.displayResult')

        if (playerCurrentScore > computerCurrentScore) {
            result.innerHTML = `<h4 class="end">Player Won</h4>`
        } else if (playerCurrentScore == computerCurrentScore) {
            result.innerHTML = `<h4 class="end">Game Tied</h4>`
        } else {
            result.innerHTML = `<h4 class="end">Computer Won</h4>`
        }
    }
    displayChoices(player, cpu) {
        let cpuC = document.querySelector('.cpuC')
        let playerC = document.querySelector('.playerC')

        playerC.innerText = player;
        cpuC.innerText = cpu;

    }

}

let game = new Game();