let btn_cal = document.querySelector(".calculate");
btn_cal.addEventListener('click', function() {
    let maths = document.querySelector(".maths")
    let physics = document.querySelector(".physics")
    let chemistry = document.querySelector(".chemistry")
    let c = document.querySelector(".c")
    let computer = document.querySelector(".computer")

    let total = parseFloat(maths.value) + parseFloat(physics.value) + parseFloat(chemistry.value) + parseFloat(c.value) + parseFloat(computer.value);
    console.log(total);
    let percentage = (total / 500) * 100;
    let grades = "";
    if (percentage <= 100 && percentage >= 80) {
        grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
        grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
        grades = "C";
    } else {
        grades = "F";
    }

    if (maths == "" || physics == "" || chemistry == "" || c == "" || computer == "") {
        alert('Please enter all the fields');
        return;

    }
    document.querySelector('.total').innerText = total;
    document.querySelector('.percentage').innerText = percentage + "%";
    document.querySelector('.grade').innerText = grades;


})