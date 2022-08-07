function recup() {
    const url = "https://blockchain.info/ticker"

    fetch(url).then(response => response.json()).then(result => {
        refreshData(result.USD.last)
    }).catch((e) => {
        console.log(e)
    });
}

function refreshData(data) {

    document.querySelector('.price').innerText = `${data} $`;
}

setInterval(() => {
    recup()
}, 1000);