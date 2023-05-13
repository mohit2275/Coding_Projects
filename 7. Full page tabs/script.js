function show(a, b, c, d, e, color) {

    let buttons = document.getElementsByClassName('buttons');
    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '';
    }
    
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.backgroundColor = color;


}        