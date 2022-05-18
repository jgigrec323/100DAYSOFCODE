const btn__submit = document.querySelector(".btn__submit");
const btn__clear = document.querySelector(".btn__clear");


const grocery__items = document.querySelectorAll(".grocery__item");
const grocery__list = document.querySelector(".grocery__list");
let add__input = document.querySelector(".add__input");
init();

function init() {
    tab = grocery__list.children;
    add__input.value = "";
}





btn__submit.addEventListener("click", function(e) {
    if (add__input.value != "") {
        document.querySelector('.ini').classList.add('hide');
        createItem(add__input);
        const suppr = document.querySelectorAll('.suppr');
        const btn__modif = document.querySelectorAll(".modif");

        suppr.forEach(el => {
            el.addEventListener("click", function() {
                let item = el.parentElement.parentElement;
                item.style.opacity = 0;
                setTimeout(() => {
                    item.style.display = "none";
                    item.remove();
                }, 200);

            })
        });

        btn__modif.forEach(el => {
            el.addEventListener("click", function() {
                let mod;
                let item = el.parentElement.parentNode.children[0];
                mod = prompt("Change value");
                item.textContent = mod;


                //console.log(item)

            })
        });


        btn__clear.addEventListener("click", function(e) {
            let all = e.target.parentNode.children[1].children;
            for (let i = 0; i < all.length; i++) {
                all[i].remove();
            }
        })

        init();
    } else {
        alert('Please add a grocery');
    }


})




function createItem(item) {
    let parent = document.createElement("div");
    parent.classList.add('grocery__item');

    parent.innerHTML = ` <p>${item.value}</p>
    <div class="option">
        <span class="mdi mdi-trash-can-outline "></span>
        <span class="mdi mdi-pencil "></span>
    </div>`
    let trash = parent.lastElementChild.children[0]
    trash.classList.add('suppr')
    let modif = parent.lastElementChild.children[1]
    modif.classList.add('modif')
    grocery__list.appendChild(parent);
    //console.log(trash)

    //console.log(grocery__list);
}