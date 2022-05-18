const text = document.querySelector('.input input');
const btnGen = document.querySelector('.input button');
const qr_code_element = document.querySelector('.qr__code');

btnGen.addEventListener('click', function() {
    if (text.value == "")
        alert('Empty field');
    else {
        if (qr_code_element.childElementCount == 0) {
            generate(text);
        } else {
            qr_code_element.innerHTML = "";
            generate(text);
        }
    }
})

function generate(text) {
    let textValue = text.value;
    let qrCode = new QRCode(qr_code_element, {
        text: `${textValue}`,
        width: 180,
        height: 180,
        colorDark: "#11272a",
        colorLight: "#eeeeee",
        correctLevel: QRCode.CorrectLevel.H
    })
    let download = document.createElement("button");
    qr_code_element.appendChild(download);

    let download_link = document.createElement("a");
    download_link.setAttribute("download", `${text.value}.png`);
    download_link.innerHTML = `Download <i class="fa fa-download" ></i>`;

    download.appendChild(download_link);

    let qr_code_img = document.querySelector(".qr__code img");
    let qr_code_canvas = document.querySelector("canvas");

    if (qr_code_img.getAttribute("src") == null) {
        setTimeout(() => {
            download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`);
        }, 300);
    } else {
        setTimeout(() => {
            download_link.setAttribute("href", `${qr_code_img.getAttribute("src")}`);
        }, 300);
    }

}
generate(text)