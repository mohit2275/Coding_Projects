let btn = document.getElementById('btn');
let cancel = document.getElementById('cancel');
let nav = document.getElementById('nav');
let count = 0

btn.addEventListener('click', function () {
    if (count === 0) {
        nav.style.height = "100vh"
        count = 1;
    }
})

cancel.addEventListener('click', function () {
    if (count === 1) {
        nav.style.height = "0vh"
        count = 0;
    }
})