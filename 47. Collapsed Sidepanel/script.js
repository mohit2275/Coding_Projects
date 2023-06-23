let btn = document.getElementById('btn');
let cancel = document.getElementById('cancel');
let nav = document.getElementById('nav');
let count = 0

btn.addEventListener('click', function () {
    if (count === 0) {
        nav.style.width = "250px";
        count = 1;
        console.log('Show');
    }
})

cancel.addEventListener('click', function () {
    if (count === 1) {
        nav.style.width = "0px"
        count = 0;
        console.log('Hide');
    }
})