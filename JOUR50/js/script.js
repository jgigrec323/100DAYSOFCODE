const plus = document.querySelectorAll('.fa-plus');
const moins = document.querySelectorAll('.fa-minus');
const reponse = document.querySelectorAll('.reponse');





plus.forEach(el => {

    el.addEventListener("click", function(e) {
        el.classList.add('hidden');
        e.target.nextElementSibling.classList.remove('hidden');
        const p = e.target.parentElement.children[1];
        p.classList.add('active')
    })

});

moins.forEach(el => {

    el.addEventListener("click", function(e) {
        el.classList.add('hidden');
        e.target.previousElementSibling.classList.remove('hidden');
        const p = e.target.parentElement.children[1];
        p.classList.remove('active')
    })
});