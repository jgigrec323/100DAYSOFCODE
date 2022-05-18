const suppr = document.querySelector('.C');
const plusMinus = document.querySelector('.plusMinus');
const percent = document.querySelector('.percent');
const divide = document.querySelector('.divide');
const times = document.querySelector('.times');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const equal = document.querySelector('.equals');
const nombres = document.querySelectorAll(".option__row .nombres")
const options = document.querySelectorAll(".option__row .option")
let operation = document.querySelector('.operation');
let resultat = document.querySelector('.resultat');
let valeur1 = 0,
    valeur2 = 0;
let check = false;
let operator;


//INITIALISATION
initialisation();




suppr.addEventListener("click", function() {
    initialisation();
    check = false;
})

function initialisation() {
    operation.value = 0;
    operation.classList.remove('touch')
    resultat.value = "";
    options.forEach(option => {
        option.style.background = "linear-gradient(145deg, #cacaca, #f0f0f0)"
    });
}

options.forEach(option => {
    option.addEventListener("click", function(e) {
        this.style.background = "yellow";
        if (this.classList[1] != "equals") {

            if (!check) {
                valeur1 = Number(operation.value);
                console.log("valeur1:" + valeur1);




                //this.style.background = "yellow";
                check = true;
            } else {
                valeur2 = Number(operation.value);
                console.log("valeur2:" + valeur2);
                check = false;

            }

            initialisation();
            operator = getOperator(this);
        } else {
            operation.classList.add('touch');
            valeur2 = Number(operation.value);
            equal.addEventListener("click", function() {
                if (operator === undefined)
                    console.log('eh')
                else {
                    calculator();
                }
            })
        }



    })
});



nombres.forEach(nombre => {
    nombre.addEventListener("click", function() {

        if (operation.value == 0) {
            operation.value = (this.value);
        } else {
            operation.value += (this.value);
        }


    })
});


function getOperator(eventTrack) {
    let operator;
    switch (eventTrack.classList[1]) {
        case "divide":
            operator = "divide";
            break;
        case "times":
            operator = "times";
            break;
        case "plus":
            operator = "plus";
            break;
        case "minus":
            operator = "minus";
            break;
        case "percent":
            operator = "percent";
            break;
        case "plusMinus":
            operator = "plusMinus";
            check = true;
            break;
        case "percent":
            operator = "percent";
            check = true;
            calculator();
            break;

        default:
            break;
    }
    return operator;
}



class Instruction {
    constructor(val1, val2) {
        this.val1 = Number(val1);
        this.val2 = Number(val2);
    }
    addition() {
        return (this.val1 + this.val2);
    }
    soustraction() {
        return (this.val1 - this.val2);
    }
    multiplication() {
        return (this.val1 * this.val2);
    }
    division() {
        return (this.val1 / this.val2);
    }
    pourcentage() {
        return (this.val1 / 100);
    }
}

function calculator() {
    switch (operator) {
        case "times":
            resultat.value = valeur1 * valeur2;
            break;
        case "divide":
            resultat.value = valeur1 / valeur2;
            break;
        case "minus":
            resultat.value = valeur1 - valeur2;
            break;
        case "plus":
            resultat.value = valeur1 + valeur2;
            break;
        case "plusMinus":
            resultat.value = -1 * valeur1;
            break;
        case "percent":
            resultat.value = valeur1 / 100;
            break;


        default:
            break;
    }

}