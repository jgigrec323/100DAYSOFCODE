const bar = document.querySelector('.bar');
let width = 1;
const success = document.querySelector('.success');
const counter = document.querySelector('.counter');

function start() {
    setInterval(() => {
        if (width >= 100) {
            success.innerHTML = 'Dowload completed!';
            success.style.opacity = 1;
            clearInterval()
        } else {
            width++;
            bar.style.width = width + '%';
            counter.innerHTML = width + '%';
        }
    }, 10);
}