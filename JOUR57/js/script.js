var txt = document.getElementById('txt');
var list = document.getElementById('list');
var items = ['PHP', 'React.js', 'WordPress'];

txt.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        let val = txt.value;
        if (val !== '') {
            if (items.indexOf(val) >= 0) {
                alert('Tag name is a duplicate');
            } else {
                items.push(val);
                render();
                txt.value = '';
                txt.focus();
            }
        } else {
            alert('Please type a tag Name');
        }
    }
});

function render() {
    list.innerHTML = '';
    items.map((item, index) => {
        list.innerHTML += `<li><span>${item}</span><a href="javascript: remove(${index})">X</a></li>`;
    });
}

function remove(i) {
    items = items.filter(item => items.indexOf(item) != i);
    render();
}

window.onload = function() {
    render();
    txt.focus();
}