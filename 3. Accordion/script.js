let count1 = 0;
let count2 = 0;
let count3 = 0;

function one(x, y, z, a) {
    if (count1 === 0) {
        x.style.display = "inline-flex";
        y.style.display = "none";
        z.style.display = 'inline-flex';
        a.style.backgroundColor = " rgb(105, 104, 104)"
        count1 = 1;
    }
    else if (count1 === 1) {
        x.style.display = "none"
        y.style.display = "inline-flex";
        z.style.display = "none";
        a.style.backgroundColor = " rgb(173, 167, 167)"
        count1 = 0;
    }
}

function two(x, y, z, a) {
    if (count2 === 0) {
        x.style.display = "inline-flex";
        y.style.display = "none";
        z.style.display = 'inline-flex';
        a.style.backgroundColor = " rgb(105, 104, 104)"
        count2 = 1;
    }
    else if (count2 === 1) {
        x.style.display = "none"
        y.style.display = "inline-flex";
        z.style.display = "none";
        a.style.backgroundColor = " rgb(173, 167, 167)"
        count2 = 0;
    }
}

function three(x, y, z, a) {
    if (count3 === 0) {
        x.style.display = "inline-flex";
        y.style.display = "none";
        z.style.display = 'inline-flex';
        a.style.backgroundColor = " rgb(105, 104, 104)"
        count3 = 1;
    }
    else if (count3 === 1) {
        x.style.display = "none"
        y.style.display = "inline-flex";
        z.style.display = "none";
        a.style.backgroundColor = " rgb(173, 167, 167)"
        count3 = 0;
    }
}