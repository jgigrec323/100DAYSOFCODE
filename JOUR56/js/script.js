const tableData = [
    { nom: 'PS4 pro', image: 'img/ps4.jpg', moreInfo: 'Limited Edition', price: '350' },
    { nom: "Casque d'écoute stéréo", image: 'img/casque.jpeg', moreInfo: '', price: '253' },
    { nom: 'Manette sans fil', image: 'img/manette.jpg', moreInfo: 'Rose doré', price: '44' },
]
const tbody = document.querySelector('tbody');

//init by fetching datas from ${tableData} then displaying them on the page
init();

function init() {
    tbody.innerHTML = '';

    tableData.map((data, key) => {
        tbody.innerHTML += `
        <tr id=${key}>
                            <td class="productDetails">
                                <img src="${data.image}" alt="ps4">
                                <div>
                                    <h5 class="productTitle">${data.nom}</h5>
                                    <p class="productMoreInfo">${data.moreInfo}</p>
    
                                    <button class="remove">Remove</button>
                                </div>
                            </td>
                            <td class="productNbre"  onmousedown="return false" onselectstart="return false">
                                <span class="minus">&minus;</span>
                                <input type="text" class="quantity" value="1">
                                <span class="plus">&plus;</span>
                            </td>
                            <td class="singlePrice">$${data.price}</td>
                            <td class="totalPrice">$${data.price}</td>
                        </tr>
        
        `;
        document.querySelector('.totalItems').innerText = `${key+1} Items`
    })

}

// managing click on the plus and minus sign
const plus = document.querySelectorAll('.plus');
const minus = document.querySelectorAll('.minus');

plus.forEach(el => {
    el.addEventListener("click", (e) => {

        changeQuantity(e.path[2].id, "plus", e.target.previousElementSibling)
        updateTotals(allTotals())
    })
});
minus.forEach(el => {
    el.addEventListener("click", (e) => {
        changeQuantity(e.path[2].id, "minus", e.target.nextElementSibling)
        updateTotals(allTotals())
    })
});

//this function help to update products quantity after clicking on above sign
function changeQuantity(rowId, signe, el) {
    let total = tableData.length;
    switch (signe) {
        case "plus":
            {
                total++;
                el.value++;

                multiplyPrice(rowId, tableData[rowId].price, el.value)
                break;
            }
        case "minus":
            {

                if (el.value != 1) {
                    el.value--;

                    multiplyPrice(rowId, tableData[rowId].price, el.value)
                }
                break;
            }
    }
}

//this function  help to multiply and to display products cost after quantities being modified
function multiplyPrice(id, singlePrice, quantity) {
    let currentRow = document.querySelectorAll('tbody tr')[id]
    currentRow.querySelector('.totalPrice').innerText = `$${singlePrice*quantity}`

}

//this function returns a table of totals quantities & sum of totals cost (all products inclued)
function allTotals() {
    const quantityInput = document.querySelectorAll('.quantity');
    let totalQtt = 0;
    quantityInput.forEach(el => {
        totalQtt += Number(el.value);
    });

    const tabPrices = document.querySelectorAll('.totalPrice');
    let totalPrices = 0;
    tabPrices.forEach(el => {
        txt = el.innerText;
        totalPrices += Number(txt.substring(1));
    });

    return [totalQtt, totalPrices]
}

function getShipInfo() {
    return Number(document.querySelector('#shippingInfos').value);
}

document.querySelector('#shippingInfos').addEventListener("change", (e) => {
    updateTotals(allTotals());
});

//this function update all the totals values on the page
function updateTotals(totals) {
    let itemsTotal = document.querySelector('.itemsTotal');
    let totalAmount = document.querySelector('.totalAmount');

    itemsTotal.innerText = `Items ${totals[0]}`;
    totalAmount.innerText = `$ ${totals[1]}`;
    document.querySelector('#totalCost').innerText = `$${totals[1]+getShipInfo()}`

}
updateTotals(allTotals())

//this function manages the click on remove buttons
function del(id) {
    let currentRow = document.querySelectorAll('tbody tr')[id]
    document.querySelectorAll('.quantity')[id].input;
    document.querySelector('.totalItems').innerText = `${document.querySelectorAll('tbody tr').length-1} Items`
    currentRow.remove();
    updateTotals(allTotals());
}

const btnRemove = document.querySelectorAll('.remove');

btnRemove.forEach(el => {
    el.addEventListener("click", (e) => {
        del(e.path[3].id)
    })
});