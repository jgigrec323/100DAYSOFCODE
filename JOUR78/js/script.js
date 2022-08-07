const apiKey = "dtxtaGwyQSyoB1aFTNFh1AVM5VW0BvdufIeoqcO7";
const url = "https://api.nasa.gov/planetary/apod"



fetch(`${url}?api_key=${apiKey}`).then(response => response.json()).then(result => {
    displayer(result)
}).catch((e) => {
    console.log(e)
});

function displayer(data) {
    document.querySelector('.img-title').innerText = data.title;
    document.querySelector('.img-date').innerText = data.date;
    document.querySelector('.img-jour').setAttribute('src', data.url)
    document.querySelector('.explanation').innerText = data.explanation;
}