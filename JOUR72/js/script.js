const section = document.querySelector('section');
const playerLivesCount = document.querySelector('.playerLivesCount');
let playerLives = 10;

playerLivesCount.textContent = playerLives;


const data = [{
        emojis: "🍍",
        name: "pineapple"
    },
    {
        emojis: "🥕",
        name: "carrot"
    },
    {
        emojis: "🍌",
        name: "banana"
    },
    {
        emojis: "🍒",
        name: "apple"
    },
    {
        emojis: "🥑",
        name: "avocado"
    },
    {
        emojis: "🌽",
        name: "corn"
    },
    {
        emojis: "🍇",
        name: "grape"
    },
    {
        emojis: "🍉",
        name: "watermelon"
    },
    {
        emojis: "🥭",
        name: "papaya"
    },
    {
        emojis: "🥔",
        name: "peanut"
    },
    {
        emojis: "🍍",
        name: "pineapple"
    },
    {
        emojis: "🥕",
        name: "carrot"
    },
    {
        emojis: "🍌",
        name: "banana"
    },
    {
        emojis: "🍒",
        name: "apple"
    },
    {
        emojis: "🥑",
        name: "avocado"
    },
    {
        emojis: "🌽",
        name: "corn"
    },
    {
        emojis: "🍇",
        name: "grape"
    },
    {
        emojis: "🍉",
        name: "watermelon"
    },
    {
        emojis: "🥭",
        name: "papaya"
    },
    {
        emojis: "🥔",
        name: "peanut"
    }
]

const randomize = () => {
    return data.sort(() => Math.random() - 0.5)
}

function cardGenerator() {
    const cardData = randomize();
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("span");
        const back = document.createElement("div");
        card.classList = "card"
        face.classList = "face"
        back.classList = "back"

        face.innerText = item.emojis;
        card.setAttribute('name', item.name)

        section.appendChild(card)
        card.appendChild(face)
        card.appendChild(back)

        card.addEventListener("click", (e) => {
            card.classList.toggle('toggleCard')
            checkCards(e)
        })
    });

}

function checkCards(e) {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped')
    const flippedCards = document.querySelectorAll('.flipped')
    const toggleCard = document.querySelectorAll('.toggleCard')
        //logic
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            console.log("match")
            flippedCards.forEach(card => {
                card.classList.remove('flipped')
                card.style.pointerEvents = "none"
            });
        } else {
            console.log("wrong")
            flippedCards.forEach(card => {
                card.classList.remove('flipped')
                setTimeout(() => {
                    card.classList.remove("toggleCard")
                }, 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives == 0) restart("Try Again")
        }
    }
    if (toggleCard.length === 20) restart("You Won")
}

function restart(text) {
    let cardData = randomize()
    let faces = document.querySelectorAll('.face')
    let cards = document.querySelectorAll('.card')
    section.style.pointerEvents = "none"
    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard')

        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].innerText = item.emojis;
            cards[index].setAttribute('name', item.name)
            section.style.pointerEvents = "none"
        }, 1000);
    });
    playerLives = 10;
    playerLivesCount.textContent = playerLives

    setTimeout(() => {
        window.alert(text)
    }, 100);

}

cardGenerator();