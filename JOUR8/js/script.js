const add__btn = document.querySelector('.add');
const add__input = document.querySelector('.add__input');
const todolist = document.querySelector('.todolist');
let spanmdi = document.querySelector('.mdi.mdi-plus');


add__input.style.opacity = 0;
add__btn.addEventListener('click', function() {
    if (add__input.style.opacity == 0) {
        add__input.style.opacity = 1;
        spanmdi.classList.add('rotate');
    } else {
        add__input.style.opacity = 0;
        spanmdi.classList.remove('rotate');

    }


})

add__input.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        if (add__input.value === "") {
            alert('Veuillez entrer une tâche');
            return;
        } else {
            //creation du parent
            const task = document.createElement('div');
            task.classList.add('task');
            //creation du content
            const content = document.createElement('div');
            content.classList.add('content');
            //creation du input.text
            const text = document.createElement('input');
            text.type = "text";
            text.classList.add('text');
            text.value = add__input.value;
            text.setAttribute('readonly', "readonly");
            //creation des actions
            const actions = document.createElement('div');
            actions.classList.add('actions');
            //edit btn
            const edit = document.createElement('button');
            edit.classList.add('edit');
            edit.innerText = "Edit";
            //del btn
            const del = document.createElement('button');
            del.classList.add('delete');
            del.innerText = "Delete";

            //ajout des boutons
            actions.appendChild(edit);
            actions.appendChild(del);
            content.appendChild(text);
            task.appendChild(content);
            task.appendChild(actions);
            todolist.appendChild(task);

            add__input.value = "";

            edit.addEventListener('click', function(e) {
                if (edit.innerText.toLowerCase() == "edit") {
                    edit.innerText = "Save";
                    text.removeAttribute("readonly");
                    text.focus();
                } else {
                    edit.innerText = "Edit";
                    text.setAttribute('readonly', "readonly");
                }
            })
            del.addEventListener("click", function(e) {
                todolist.removeChild(task);
            })

        }
    }
})




















let d = new Date();
let dy = d.getFullYear(),
    dmo = d.getMonth(),
    dday = d.getDay(),
    ddate = d.getDate();

let mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
let jour = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

let thisday = jour[dday] + ',' + ddate + ' ' + mois[dmo] + ' ' + dy;
//console.log(thisday)
let dateblock = document.querySelector('.date')
dateblock.append(thisday)