const btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener("click", function(e) {
    e.preventDefault();
    console.log('e')


    generatePDF();
})





function generatePDF() {

    var element = $(".container").html()
    var pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true
    });

    pdf.fromHTML(`${element}`, 10, 10, {
        'align': "justify",
        'width': 190
    });
    pdf.save('essayontech.pdf');
}