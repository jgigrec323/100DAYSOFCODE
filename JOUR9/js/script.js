const dropList = document.querySelectorAll(".actions select"),
    fromCurrency = document.querySelector(".from select"),
    toCurrency = document.querySelector(".to select"),
    getButton = document.querySelector("button");

for (let i = 0; i < dropList.length; i++) {
    for (let currency_code in country_list) {
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "GNF" ? "selected" : "";
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e => {
        loadFlag(e.target);
    });
}
// tVXIyovzQYzOTOhqkhYHLY72YXhh7B6x
function loadFlag(element) {
    for (let code in country_list) {
        if (code == element.value) {
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}

window.addEventListener("load", function() {
    getExchangeRate();
})
getButton.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate();
})
const amount__input = document.querySelector('.amount__input');
amount__input.addEventListener("keydown", e => {
    if (e.keyCode === 13) {
        getExchangeRate();
    }


})

const exchangeIcon = document.querySelector(".icon");
exchangeIcon.addEventListener("click", function() {
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
})

function getExchangeRate() {

    const exchange__rate = document.querySelector('.exchange-rate');
    let amountVal = amount__input.value;
    if (amountVal == "" || amountVal == "0") {
        amount__input.value = "1";
        amountVal = 1;
    }
    exchange__rate.innerText = "Getting exchange rate...";
    const key = "89cede30da3b23ffc44ed724";
    let url = `https://v6.exchangerate-api.com/v6/${key}/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value];
        let totalExRate = (amountVal * exchangeRate).toFixed(2);
        exchange__rate.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    }).catch(() => {
        exchange__rate.innerText = "Something went wrong";
    });
}