let slides = document.querySelectorAll(".slide");
let number = document.getElementById('number');
let count = 0;
let num = 1;


let left = document.getElementById('left');
let right = document.getElementById('right');

right.addEventListener('click', function () {
    if (count == slides.length - 1) {
        count = 0;
        num = 1;
        slideShow();
        slides[0].previousElementSibling.innerHTML = `${num}/5`;
    }
    else {
        count++;
        num++;
        setTimeout(() => {
            slideShow();
            slides[0].previousElementSibling.innerHTML = `${num}/5`;
        }, 0);

    }
})

left.addEventListener('click', function () {
    if (count == 0) {
        count = slides.length - 1;
        num = slides.length;
        slideShow();
        slides[0].previousElementSibling.innerHTML = `${num}/5`;
    }
    else {
        count--;
        num--;
        setTimeout(() => {
            slideShow();
            slides[0].previousElementSibling.innerHTML = `${num}/5`;
        }, 0);

    }
})

number.innerHTML = `${num}/5`



slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

let slideShow = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
}


