function mohit(a, b, c, d, p, color) {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";

    button = document.getElementsByClassName("button");
    for (i = 0; i < button.length; i++) {
        button[i].style.backgroundColor = "";
    }

    p.style.backgroundColor = color;


}