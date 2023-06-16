let dropdownBtn = document.getElementById('drop')
let menu1 = document.getElementById('menu1')


dropdownBtn.addEventListener("mouseover", function () {
    menu1.style.height = "fit-content"
})
dropdownBtn.addEventListener("mouseout", function () {
    menu1.style.height = "0"
})