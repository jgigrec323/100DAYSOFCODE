const apiKey = "a6700b76208b36a0d1adc3f59c875598";
const cityInfo = document.querySelector('.city')
const countryInfo = document.querySelector('.country')
const skyConditionsInfo = document.querySelector('.skyConditions')
const temperatureInfo = document.querySelector('.temperature')
const windSpeedInfo = document.querySelector('.windSpeed')
const humidityInfo = document.querySelector('.humidity')
const img = document.querySelector('img')
const searchInput = document.querySelector('.searchInput')



//functions that fetch the datas
const fetchData = (name = "istanbul") => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayInfos(data)
                //console.log(data)

        }).catch(err => {
            alert('Enter a valid city')
        })


}
const displayByEntry = () => {
    fetchData(searchInput.value)
}

//display infos
const displayInfos = (data) => {
    let city = data.name;
    let country = data.sys.country;
    let { description, id } = data.weather[0]
    const { temp, feels_like, humidity } = data.main
    const windSpeed = data.wind.speed;

    if (id == 800) {
        img.src = "img/clear-sky.png";
    } else if (id >= 200 && id <= 232) {
        img.src = "img/storm.png";
    } else if (id >= 600 && id <= 622) {
        img.src = "img/snow.png";
    } else if (id >= 701 && id <= 781) {
        img.src = "img/haze.png";
    } else if (id >= 801 && id <= 804) {
        img.src = "img/clouds.png";
    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
        img.src = "img/rain.png";
    }


    cityInfo.innerHTML = `City:<span class="info"> ${city}</span>`
    countryInfo.innerHTML = `Country:<span class="info"> ${country}</span>`
    skyConditionsInfo.innerHTML = `Sky Conditions:<span class="info"> ${description}</span> `
    temperatureInfo.innerHTML = `Temperature:<span class="info"> ${Math.floor((temp - 273).toFixed(2))}°C</span>`
    windSpeedInfo.innerHTML = `Wind Speed:<span class="info"> ${windSpeed} km/h</span>`
    humidityInfo.innerHTML = `Humidity:<span class="info"> ${humidity} %</span>`
}


fetchData()