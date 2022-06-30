const select = document.getElementById('list');




initiate();



function initiate() {

    for (let i = 0; i < countries.length; i++) {
        let opt = document.createElement('option');
        opt.setAttribute('value', `${countries[i].continent}/${countries[i].capital}`)
        opt.innerHTML = `${countries[i].name}`
        select.appendChild(opt);
    }
}
setInterval(() => {
    timeDisplay()
}, 1000);

function timeDisplay() {
    let hourImput = document.querySelector('.hour');
    let url = `http://worldtimeapi.org/api/timezone/${select.value}`;
    fetch(url).then(response => response.json()).then(result => {
        resultat = result.datetime.slice(11, 19);
        hourImput.value = resultat;
    }).catch((err) => {
        console.log(err)
    });


}