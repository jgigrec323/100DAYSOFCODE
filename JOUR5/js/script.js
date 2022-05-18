let option__1 = document.querySelector('#lenght__option');
let option__2 = document.querySelector('#mass__option');

let from__unit = document.querySelector('#units-from');
let to__unit = document.querySelector('#units-to');

let from__unit__kg = document.querySelector('#units-from-kg');
let to__unit__kg = document.querySelector('#units-to-kg');
let fromasse = document.querySelector('.masse .value input');
let tomasse = document.querySelector('.unit__to.masse .value input');


let from__value = document.querySelector('.longueur .value input');
let from = document.querySelector('.longueur .value input');
let to = document.querySelector('.unit__to.longueur .value input');

//let to__value = Number(document.querySelector('.unit__to .value input').value);
const lenght__content = document.querySelectorAll('.longueur');
const mass__content = document.querySelectorAll('.masse');
let result__value = 0;

//let convert = document.querySelector(".convert");

//SELECTION DES OPTIONS DE CONVERSIONS
option__1.addEventListener("click", selectUnit)
option__2.addEventListener("click", selectUnit)


//CONVERSION

from.addEventListener("keyup", function() {
    converter_lenght(from__unit.value, to__unit.value)
    to.value = result__value;
})


fromasse.addEventListener("keyup", function() {
    converter_mass(from__unit__kg.value, to__unit__kg.value)
    tomasse.value = result__value;
})

//FUNCTIONS

selectUnit();

function selectUnit() {
    if (option__1.checked == true) {
        mass__content.forEach(el => {
            el.style.display = "none";
        });
        lenght__content.forEach(el => {
            el.style.display = "block";
        });
    } else {
        lenght__content.forEach(el => {
            el.style.display = "none";
        });
        mass__content.forEach(el => {
            el.style.display = "block";
        });
    }

}

function converter_lenght(fromUnit, toUnit) {
    switch (fromUnit) {
        case "m":
            switch (toUnit) {
                case "m":
                    result__value = Number(from__value.value);

                    break;
                case "km":
                    result__value = Number(from__value.value) / 1000;
                    break;
                case "hm":
                    result__value = Number(from__value.value) / 100;
                    break;
                case "dam":
                    result__value = Number(from__value.value) / 10;
                    break;
                case "dm":
                    result__value = Number(from__value.value) * 10;
                    break;
                case "cm":
                    result__value = Number(from__value.value) * 100;
                    break;
                case "mm":
                    result__value = Number(from__value.value) * 1000;
                    break;
                default:
                    alert("Error, choose a valid unit");
            }
            break;
        case "km":
            switch (toUnit) {
                case "m":
                    result__value = Number(from__value.value) * 1000;
                    break;
                case "km":
                    result__value = Number(from__value.value);
                    break;
                case "hm":
                    result__value = Number(from__value.value) * 10;
                    break;
                case "dam":
                    result__value = Number(from__value.value) * 100;
                    break;
                case "dm":
                    result__value = Number(from__value.value) * 10000;
                    break;
                case "cm":
                    result__value = Number(from__value.value) * 100000;
                    break;
                case "mm":
                    result__value = Number(from__value.value) * 1000000;
                    break;
                default:
                    alert("Error, choose a valid unit");
            }
            break;
        case "hm":
            switch (toUnit) {
                case "m":
                    result__value = Number(from__value.value) * 100;
                    break;
                case "km":
                    result__value = Number(from__value.value) / 10;
                    break;
                case "hm":
                    result__value = Number(from__value.value);
                    break;
                case "dam":
                    result__value = Number(from__value.value) * 10;
                    break;
                case "dm":
                    result__value = Number(from__value.value) * 1000;
                    break;
                case "cm":
                    result__value = Number(from__value.value) * 10000;
                    break;
                case "mm":
                    result__value = Number(from__value.value) * 100000;
                    break;
                default:
                    alert("Error, choose a valid unit");
            }
            break;
        case "dam":
            switch (toUnit) {
                case "m":
                    result__value = Number(from__value.value) * 10;
                    break;
                case "km":
                    result__value = Number(from__value.value) / 100;
                    break;
                case "hm":
                    result__value = Number(from__value.value) / 10;
                    break;
                case "dam":
                    result__value = Number(from__value.value);
                    break;
                case "dm":
                    result__value = Number(from__value.value) * 100;
                    break;
                case "cm":
                    result__value = Number(from__value.value) * 1000;
                    break;
                case "mm":
                    result__value = Number(from__value.value) * 10000;
                    break;
                default:
                    alert("Error, choose a valid unit");
            }
            break;
        case "dm":
            switch (toUnit) {
                case "m":
                    result__value = Number(from__value.value) / 10;
                    break;
                case "km":
                    result__value = Number(from__value.value) / 10000;
                    break;
                case "hm":
                    result__value = Number(from__value.value) / 1000;
                    break;
                case "dam":
                    result__value = Number(from__value.value) / 100;
                    break;
                case "dm":
                    result__value = Number(from__value.value);
                    break;
                case "cm":
                    result__value = Number(from__value.value) * 10;
                    break;
                case "mm":
                    result__value = Number(from__value.value) * 100;
                    break;
                default:
                    alert("Error, choose a valid unit");
            }
            break;
        case "cm":
            switch (toUnit) {
                case "m":
                    result__value = Number(from__value.value) / 100;
                    break;
                case "km":
                    result__value = Number(from__value.value) / 100000;
                    break;
                case "hm":
                    result__value = Number(from__value.value) / 10000;
                    break;
                case "dam":
                    result__value = Number(from__value.value) / 1000;
                    break;
                case "dm":
                    result__value = Number(from__value.value) / 10;
                    break;
                case "cm":
                    result__value = Number(from__value.value);
                    break;
                case "mm":
                    result__value = Number(from__value.value) * 10;
                    break;
                default:
                    alert("Error, choose a valid unit");
            }
            break;
        case "mm":
            switch (toUnit) {
                case "m":
                    result__value = Number(from__value.value) / 1000;
                    break;
                case "km":
                    result__value = Number(from__value.value) / 1000000;
                    break;
                case "hm":
                    result__value = Number(from__value.value) / 100000;
                    break;
                case "dam":
                    result__value = Number(from__value.value) / 10000;
                    break;
                case "dm":
                    result__value = Number(from__value.value) / 100;
                    break;
                case "cm":
                    result__value = Number(from__value.value) / 10;
                    break;
                case "mm":
                    result__value = Number(from__value.value);
                    break;
                default:
                    alert("Error, choose a valid unit");
            }
            break;


        default:
            alert("Error, choose a valid unit");
            break;
    }
}

function converter_mass(fromUnitkg, toUnitKg) {
    switch (fromUnitkg) {
        //CONVERSION EN KG

        case "g":
            switch (toUnitKg) {
                case "g":
                    result__value = Number(fromasse.value);
                    // console.log('he')
                    break;
                case "kg":
                    result__value = Number(fromasse.value) / 1000;
                    break;
                case "hg":
                    result__value = Number(fromasse.value) / 100;
                    break;
                case "dag":
                    result__value = Number(fromasse.value) / 10;
                    break;
                case "dg":
                    result__value = Number(fromasse.value) * 10;
                    break;
                case "cg":
                    result__value = Number(fromasse.value) * 100;
                    break;
                case "mg":
                    result__value = Number(fromasse.value) * 1000;
                    break;
                default:
                    alert("Error, choose a valid unit");
            }
            break;
        case "kg":
            switch (toUnitKg) {
                case "g":
                    result__value = Number(fromasse.value) * 1000;
                    break;
                case "kg":
                    result__value = Number(fromasse.value);
                    break;
                case "hg":
                    result__value = Number(fromasse.value) * 10;
                    break;
                case "dag":
                    result__value = Number(fromasse.value) * 100;
                    break;
                case "dg":
                    result__value = Number(fromasse.value) * 10000;
                    break;
                case "cg":
                    result__value = Number(fromasse.value) * 100000;
                    break;
                case "mg":
                    result__value = Number(fromasse.value) * 1000000;
                    break;
                default:
                    alert("Error, choose a valid unit");
            }
            break;
        case "hg":
            switch (toUnitKg) {
                case "g":
                    result__value = Number(fromasse.value) * 100;
                    break;
                case "kg":
                    result__value = Number(fromasse.value) / 10;
                    break;
                case "hg":
                    result__value = Number(fromasse.value);
                    break;
                case "dag":
                    result__value = Number(fromasse.value) * 10;
                    break;
                case "dg":
                    result__value = Number(fromasse.value) * 1000;
                    break;
                case "cg":
                    result__value = Number(fromasse.value) * 10000;
                    break;
                case "mg":
                    result__value = Number(fromasse.value) * 100000;
                    break;
                default:
                    alert("Error, choose a valid unit");
            }
            break;
        case "dag":
            switch (toUnitKg) {
                case "g":
                    result__value = Number(fromasse.value) * 10;
                    break;
                case "kg":
                    result__value = Number(fromasse.value) / 100;
                    break;
                case "hg":
                    result__value = Number(fromasse.value) / 10;
                    break;
                case "dag":
                    result__value = Number(fromasse.value);
                    break;
                case "dg":
                    result__value = Number(fromasse.value) * 100;
                    break;
                case "cg":
                    result__value = Number(fromasse.value) * 1000;
                    break;
                case "mg":
                    result__value = Number(fromasse.value) * 10000;
                    break;
                default:
                    alert("Error, choose a valid unit");
            }
            break;
        case "dg":
            switch (toUnitKg) {
                case "g":
                    result__value = Number(fromasse.value) / 10;
                    break;
                case "kg":
                    result__value = Number(fromasse.value) / 10000;
                    break;
                case "hg":
                    result__value = Number(fromasse.value) / 1000;
                    break;
                case "dag":
                    result__value = Number(fromasse.value) / 100;
                    break;
                case "dg":
                    result__value = Number(fromasse.value);
                    break;
                case "cg":
                    result__value = Number(fromasse.value) * 10;
                    break;
                case "mg":
                    result__value = Number(fromasse.value) * 100;
                    break;
                default:
                    alert("Error, choose a valid unit");
            }
            break;
        case "cg":
            switch (toUnitKg) {
                case "g":
                    result__value = Number(fromasse.value) / 100;
                    break;
                case "kg":
                    result__value = Number(fromasse.value) / 100000;
                    break;
                case "hg":
                    result__value = Number(fromasse.value) / 10000;
                    break;
                case "dag":
                    result__value = Number(fromasse.value) / 1000;
                    break;
                case "dg":
                    result__value = Number(fromasse.value) / 10;
                    break;
                case "cg":
                    result__value = Number(fromasse.value);
                    break;
                case "mg":
                    result__value = Number(fromasse.value) * 10;
                    break;
                default:
                    alert("Error, choose a valid unit");
            }
            break;
        case "mg":
            switch (toUnitKg) {
                case "g":
                    result__value = Number(fromasse.value) / 1000;
                    break;
                case "kg":
                    result__value = Number(fromasse.value) / 1000000;
                    break;
                case "hg":
                    result__value = Number(fromasse.value) / 100000;
                    break;
                case "dag":
                    result__value = Number(fromasse.value) / 10000;
                    break;
                case "dg":
                    result__value = Number(fromasse.value) / 100;
                    break;
                case "cg":
                    result__value = Number(fromasse.value) / 10;
                    break;
                case "mg":
                    result__value = Number(fromasse.value);
                    break;
                default:
                    alert("Error, choose a valid unit");
            }
            break;
        default:
            alert("Error, choose a valid unit");
            break;
    }
}