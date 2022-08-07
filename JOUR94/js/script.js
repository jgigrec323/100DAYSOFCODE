const word = document.querySelector('.word')
const definitions = document.querySelector('.definitions')
let audio = document.querySelector('audio')
const btnAudio = document.querySelector('.fa-volume-up')
const btnSearch = document.querySelector('.fa-search')
const searchInput = document.querySelector('.searchOptions input')
const displayer = document.querySelector('.displayResult')

function init() {
    displayer.style.display = "none"
}
init()

const fetchApi = (word) => {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    let resultat;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            display(result[0]);
        })
        .catch(() => {
            console.log("cannot search that words meaning")
        })


}
const display = (result) => {
    word.innerHTML = `${result.word}<span class="space"></span>${result.phonetics[1].text}`;
    console.log(result)
    const { meanings } = result;

    meanings.map((el, id) => {
        const { synonyms, antonyms } = el
        let textSyn;
        let textAnt;
        audio.src = `${result.phonetics[1].audio}`
        synonyms != 0 ? textSyn = `Synonyms :${synonyms}` : textSyn = "";
        antonyms != 0 ? textAnt = `Antonyms :${antonyms}` : textAnt = "";

        definitions.innerHTML += `
        <div class="singleDef">
                <span class="order">${id+1}-</span>
                <p class="type">${el.partOfSpeech}</p>
                <p class="definition">${el.definitions[0].definition}</p>
        
                <p class="synonyms">${textSyn}</p>
                <p class="antonyms">${textAnt}</p>
            </div>
        `
    })
}

function queryInfo() {
    let loader = document.querySelector('.loader')
    if (searchInput.value) {
        definitions.innerHTML = ""
        word.innerHTML = ""
        btnAudio.style.display = "none"
        loader.style.display = "block"
        fetchApi(searchInput.value)

        setTimeout(() => {
            loader.style.display = "none"
            displayer.style.display = "block"
            btnAudio.style.display = "block"

        }, 1000);
    } else {
        alert('Enter a word')
    }
}

btnSearch.addEventListener('click', function() {
    queryInfo()
})
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        queryInfo()
    }
})