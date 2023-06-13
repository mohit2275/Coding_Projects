let navbar = document.getElementById('navbar')

window.onscroll = function () {
    mohit();
}

function mohit() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.top = "-55px"
    }
    else {
        navbar.style.top = "0"
    }
}

