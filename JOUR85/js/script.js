const button = document.getElementById('button');
const audioElement = document.getElementById('audio');
async function getJokes() {
    let joke = "";
    const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming'

    try {
        const response = await fetch(apiUrl)
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup}...${data.delivery}`
        } else {
            joke = data.joke;
        }

        displayText(joke)

        tellMeAJoke(joke)
    } catch (error) {
        console.log(error)
    }

}

const displayText = (joke) => {
    const jokeArea = document.querySelector('.joke')
    jokeArea.innerText = joke;
    jokeArea.style.opacity = "1";
}

const tellMeAJoke = (joke) => {
    VoiceRSS.speech({
        key: '5ff4b1b6ab8143f488a977bc3a2f2a9c',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false,
    });
}