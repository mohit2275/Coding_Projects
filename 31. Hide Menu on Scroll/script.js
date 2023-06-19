let navbar = document.getElementById('navbar')

window.onscroll = function () {
    mohit();
}

function mohit() {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        navbar.style.top = "-55px"
    }
    else {
        navbar.style.top = "0"
    }
}

