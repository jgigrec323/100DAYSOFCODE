const remainTime = document.querySelector('.timeCount h1');
const container = document.querySelector('.container')
let eventName = document.querySelector('.eventName');
let eventDate = document.querySelector('.eventDate');
let dateLieu = document.querySelector('.dateLieu');
let formulaire = document.querySelector('.formulaire');
let displayedName = document.querySelector('.informations h2');


initialisation();

function initialisation() {
    container.style.display = "none";
}

window.addEventListener("keydown", function(e) {

    if (e.keyCode == 13) {
        if (eventName.value != "" && eventDate.value != "") {

            formulaire.style.display = "none";
            setTimeout(() => {
                eventCountDown(eventDate.value, eventName.value);
                container.style.display = "block";
            }, 100);

        } else {
            alert('Enter valid values!')
            return;
        }

    }

})


function eventCountDown(targetDate, eventName) {
    let x = setInterval(() => {
        let currentTime = new Date().getTime();
        let target = targetDate;

        targetTime = new Date(target).getTime();

        let difference = targetTime - currentTime;

        //conversion
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        //displaying
        if (days <= 9) {
            days = "0" + days;

        }
        if (hours <= 9) {
            hours = "0" + hours;
            console.log(hours)
        }
        if (minutes <= 9) {
            minutes = "0" + minutes;
        }
        if (seconds <= 9) {
            seconds = "0" + seconds;
        }
        dateLieu.innerText = `Target date: ${targetDate}`;
        displayedName.innerHTML = `How many days until <span class="yellow">${eventName}</span> ? (GMT)`;
        remainTime.innerText = `${days}:${hours}:${minutes}:${seconds}`


        //console.log(days, hours, minutes, seconds)
        if (difference < 0) {
            clearInterval(x);
            remainTime.innerHTML = "EXPIRED";
            document.querySelector('.units').style.display = "none";
        }
    }, 1000);



}
//eventCountDown("May 17,2022")



/* class EventCountdown {
    constructor(targetDate) {
        this.currentTime = new Date().getTime();
        this.targetDate = targetDate;
    }


    getTimee() {
        return new Date(this.targetDate).getTime();
    }
    difTime() {
        return this.getTimee() - this.currentTime;

    }
    convertingTime() {
        let days = Math.floor(this.difTime() / (1000 * 60 * 60 * 24));
        let hours = Math.floor((this.difTime() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((this.difTime() % (1000 * 60 * 60)) / (1000 * 60));

        return [days, hours, minutes];

    }
    displayer() {


    }
let eve = new EventCountdown("Dec 1, 2022");
} */