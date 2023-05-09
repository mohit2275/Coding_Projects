let bar1 = document.getElementById('bar1');
let bar2 = document.getElementById('bar2');
let bar3 = document.getElementById('bar3');
let count = 0;

function change() {

    if (count === 0) {
        bar2.style.opacity = '0%';
        bar1.style.transform = "translate(0px,16px) rotate(-45deg)";
        bar1.style.backgroundColor = "rgb(247, 62, 62)"
        bar3.style.transform = "translate(0px,-16px) rotate(45deg)";
        bar3.style.backgroundColor = "rgb(247, 62, 62)"
        count = 1;
    }
    else if (count === 1) {
        bar2.style.opacity = '100%';
        bar1.style.transform = "rotate(0deg)";
        bar3.style.transform = "rotate(0deg)";
        bar3.style.backgroundColor = "black";
        bar1.style.backgroundColor = "black";
        count = 0;
    }
}