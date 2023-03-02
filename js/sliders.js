//! Slider start
let slideIndex = 1;
showSlides();

setInterval(() => {
    showSlides(slideIndex += 1);
}, 4000);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slider-item");
    const slideDot = document.getElementsByClassName("slider-dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < slideDot.length; i++) {
        slideDot[i].className = slideDot[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    slideDot[slideIndex - 1].className += " active";
}
//! Slider end