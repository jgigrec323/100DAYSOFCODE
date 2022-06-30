function imgenerator() {
    const id = generateID()

    const url = `https://picsum.photos/id/${id}/info`;

    fetch(url).then(response => response.json())
        .then(result => {


            document.body.style.backgroundImage = ` url(${result.download_url})`
            document.body.style.backgroundSize = ` cover`
            document.body.style.backgroundRepeat = `no-repeat`

            document.querySelector('.author').innerHTML = `${result.author}`
        }).catch((e) => {
            console.log(e)
        });
};
imgenerator()

setInterval(() => {
    imgenerator();
}, 8000);

function generateID() {
    const generatedID = Math.floor(Math.random() * 1000)
    return generatedID;
}