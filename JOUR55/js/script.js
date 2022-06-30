let input = document.getElementById('myInput');
let table = document.getElementById('myTable');
let tableBody = document.getElementById('tableBody');



let tableData = [
    { name: 'Onion', quantity: 29, price: 1.2, expiry: '2021-09-12' },
    { name: 'Apple', quantity: 55, price: 3.3, expiry: '2021-09-22' },
    { name: 'Potato', quantity: 25, price: 2.5, expiry: '2021-09-18' },
    { name: 'Carrot', quantity: 8, price: 0.8, expiry: '2021-09-25' }
];



function displayData(data) {
    data.map(({ name, quantity, expiry, price }) => {
        tableBody.innerHTML += `<tr>
            <td>${name}</td>
            <td>${quantity}</td>
            <td>${price}</td>
            <td>${expiry}</td>
        </tr>`
    })
}
displayData(tableData)


function filterTable(inp) {
    let val = inp.value.toUpperCase();
    let rows = document.querySelectorAll('tbody tr');
    let isfound = false;


    for (let row of rows) {
        let cells = row.getElementsByTagName('td');

        for (let cell of cells) {
            if (cell.textContent.toUpperCase().indexOf(val) > -1) {

                //styliser
                if (val) {
                    cell.style.backgroundColor = 'yellow';
                } else {
                    cell.style.backgroundColor = '';
                }
                isfound = true;


            } else {
                cell.style.backgroundColor = '';
            }

        }

        if (isfound) {
            row.style.display = ""
        } else {
            row.style.display = "none";
        }

        isfound = false;
    };



}


input.addEventListener("input", () => {
    filterTable(input)
})

const sort_by = (field, reverse, primer) => {

    const key = primer ?
        function(x) {
            return primer(x[field]);
        } :
        function(x) {
            return x[field];
        };

    reverse = !reverse ? 1 : -1;

    return function(a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    };
};

const headers = document.querySelectorAll('thead th');
const carets = document.querySelectorAll('.carets')

headers.forEach((header, index) => {
    let caretUpClassName = 'fa fa-caret-up';
    let caretDownClassName = 'fa fa-caret-down';
    isclicked = false;

    header.addEventListener("click", function(e) {
        console.log(e.target.lastElementChild)
        let clickedCar = (e.target.lastElementChild)

        if (!isclicked) {
            clickedCar.className = caretUpClassName;
            isclicked = true;
        } else {
            clickedCar.className = caretDownClassName;
            isclicked = false;
        }


    })
});