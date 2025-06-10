import '../scss/style.scss'

const navigation = document.querySelector('.burger-base');
const burgerButton = document.querySelector('.header__icon--menu');
const burgerButtonClose = navigation.querySelectorAll('.burger-header__icon--menu, .burger-base__pusto');

burgerButton.addEventListener('click', function () {
    navigation.classList.toggle('burger-base-active');
});

burgerButtonClose.forEach(button => {
    button.addEventListener('click', function () {
        navigation.classList.remove('burger-base-active');
    });
});



const callNavigation = document.querySelector('.call-base');
const callButton = document.querySelectorAll('header__icon--call, .burger-footer__button--call, .header__icon--call');
const callButtonClose = callNavigation.querySelectorAll('.call-modal__btn--close, .call-base__pusto');

callButton.forEach(button => {
    button.addEventListener('click', function () {
        callNavigation.classList.toggle('call-base-active');
    });
});

callButtonClose.forEach(button => {
button.addEventListener('click', function () {
    callNavigation.classList.remove('call-base-active');

    });
});



const feedbackNavigation = document.querySelector('.feedback-base');
const feedbackButtons = document.querySelectorAll('.burger-footer__button--chat, .header__icon--chat');
const feedbackButtonClose = feedbackNavigation.querySelectorAll('.feedback-modal__btn--close, .feedback-base__pusto');

feedbackButtons.forEach(button => {
    button.addEventListener('click', function () {
        feedbackNavigation.classList.toggle('feedback-base-active');
    });
});

feedbackButtonClose.forEach(button => {
    button.addEventListener('click', function () {
    feedbackNavigation.classList.remove('feedback-base-active');
});
});



const toggleBtn = document.getElementById('toggle-btn');
const expandableSlider = document.getElementById('expandable-text');

toggleBtn.addEventListener('click', function () {
    expandableSlider.classList.toggle('expanded');
    toggleBtn.classList.toggle('expanded');

    if (expandableSlider.classList.contains('expanded')) {
        toggleBtn.textContent = 'Скрыть все';
    } else {
        toggleBtn.textContent = 'Читать далее';
    }
});



const toggletwoBtn = document.getElementById('toggletwo-btn');
const expandableSlidertwo = document.getElementById('expandable-cards');

toggletwoBtn.addEventListener('click', function () {
    expandableSlidertwo.classList.toggle('expanded');
    toggletwoBtn.classList.toggle('expanded');

    if (expandableSlidertwo.classList.contains('expanded')) {
        toggletwoBtn.textContent = 'Скрыть';
    } else {
        toggletwoBtn.textContent = 'Показать всё';
    }
});



const togglethreeBtn = document.getElementById('togglethree-btn');
const expandableSliderthree = document.getElementById('expandable-servises');

togglethreeBtn.addEventListener('click', function () {
    expandableSliderthree.classList.toggle('expanded');
    togglethreeBtn.classList.toggle('expanded');

    if (expandableSliderthree.classList.contains('expanded')) {
        togglethreeBtn.textContent = 'Скрыть';
    } else {
        togglethreeBtn.textContent = 'Показать всё';
    }
});




var swiper = new Swiper('.swiper-container', {
     slidesPerView: 'auto',
     spaceBetween: 10,
     pagination: {
          el: '.swiper-pagination',
          clickable: true,
     },
});



var swiper2 = new Swiper('.swiper-container2', {
     slidesPerView: 'auto',
     spaceBetween: 10,
     pagination: {
          el: '.swiper-pagination2',
          clickable: true,
     },
});



var swiper3 = new Swiper('.swiper-container3', {
     slidesPerView: 'auto',
     spaceBetween: 5,
     pagination: {
          el: '.swiper-pagination3',
          clickable: true,
     },
});