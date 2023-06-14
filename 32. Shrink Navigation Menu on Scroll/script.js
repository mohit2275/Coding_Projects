let navbar = document.getElementById('navbar')
let nav1 = document.getElementById('nav1')
let nav2 = document.getElementById('nav2')
let logo = document.getElementById('logo')



window.onscroll = function () {
    mohit();
}

function mohit() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.padding = "40px 10px"
        logo.style.fontSize = "25px"
    }
    else {
        navbar.style.padding = "100px 70px"
        logo.style.fontSize = "40px"
    }
}

