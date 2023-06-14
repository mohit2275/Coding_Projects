let navbar = document.getElementById('navbar')

window.onscroll = function () {
    mohit();
}

function mohit() {
    if (document.body.scrollTop > 275 || document.documentElement.scrollTop > 275) {
        navbar.style.position = "fixed"
        navbar.style.top = "0px"
    }
    else {
        navbar.style.position = "initial"
    }
}