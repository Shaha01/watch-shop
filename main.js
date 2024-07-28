let slides = document.querySelectorAll('.slide');
let active = 0;

function clearActive() {
    slides.forEach((item) => item.classList.remove('active'));
}

function slideAnimate() {
    clearActive();
    slides[active].classList.add('active');
    active = (active + 1) % slides.length;
}



slideAnimate();
setInterval(slideAnimate, 5000);
