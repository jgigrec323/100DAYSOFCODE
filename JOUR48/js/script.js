const modal = document.querySelector('.modal'),
    btnOpen = document.querySelector('#btnOpen'),
    closeBtn = document.querySelector('.close');

btnOpen.addEventListener("click", () => modal.style.display = "block");
closeBtn.addEventListener("click", () => modal.style.display = "none");

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});