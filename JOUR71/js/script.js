const expenseName = document.querySelector('#expenseName')
const expenseAmount = document.querySelector('#expenseAmount')
const expensesList = document.querySelector('.expensesList')
const del = document.querySelectorAll('.fa-trash')
const edit = document.querySelectorAll('.fa-edit')
const btnAdd = document.querySelector('.btnAdd')

btnAdd.addEventListener('click', () => {
    if (expenseName.value != "" && expenseAmount.value != "") {
        addExpenses()
    }
})

function addExpenses() {
    expensesList.innerHTML += `
    <li>
       <span class="expenseNom">${expenseName.value}</span>
        <span class="expensePrix">$${expenseAmount.value}</span>
        <div class="options">
             <i class="fa fa-trash red" aria-hidden="true"></i>
            <i class="fa fa-edit green" aria-hidden="true"></i>
        </div>
    </li>
    `
}

del.forEach((el, index) => {
    el.addEventListener('click', e => {
        console.log(index)
    })
});