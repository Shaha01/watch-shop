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


const menuBtn = document.querySelector('.menu-btn'),
    navigation = document.querySelector('.nav-menu');


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active-btn')
    navigation.classList.toggle('active-btn')
})