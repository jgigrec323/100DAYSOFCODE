const textArea = document.getElementById('textArea');
const nbrWord = document.querySelector('.nbrWord');
const nbrCar = document.querySelector('.nbrCar');

nbrWord.innerText = "Words : 0";
nbrCar.innerText = "Characters : 0";

textArea.addEventListener('input', function() {
    let compteur = new WordCounter(textArea)
})



class WordCounter {
    constructor(text) {
        this.textValue = text.value;
        this.displayer();
    }
    displayer() {
        nbrWord.innerText = "Words :" + this.counterWords(this.textValue);
        nbrCar.innerText = "Characters :" + this.counterCar(this.textValue);
    }
    counterWords(text) {
        return text.replace(/[!.,:]/g, '').trim().split(' ').length;
    }
    counterCar(text) {
        return text.trim().length;
    }
}