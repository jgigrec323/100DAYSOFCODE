let gradient = document.querySelector('.gradient');
let generate = document.querySelector('.generate');
let copy = document.querySelector('.copy');
let gradient__output = document.querySelector('.gradient__output');

generate.addEventListener('click', () => {
    generate_gradient();
});
copy.addEventListener('click', () => {
    cop();
});





//functions
function generate_gradient() {
    copy.textContent = "Copy";
    let first__color = generate_hex();
    let second__color = generate_hex();
    let angle = Math.floor(Math.random() * 360);

    gradient.style.background = `linear-gradient(${angle}deg,${first__color},${second__color})`;
    gradient__output.value = `background: linear-gradient(${angle}deg,${first__color},${second__color})`;

}
generate_gradient();

function generate_hex() {
    let table = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hex__key = "#";

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * table.length);
        hex__key += table[index];
    }
    return hex__key;
}

function cop() {
    gradient__output.select();
    document.execCommand("copy");
    copy.textContent = "Copied";
}