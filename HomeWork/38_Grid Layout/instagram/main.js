const element = document.querySelector('.front');
let heart = document.querySelector('.fa-heart')
let num2 = document.querySelector('.num2')
let heart2 = document.querySelector('.heart2')


element.addEventListener('mouseover' /* mouseenter mouseleave */, () => {
    /* element.classList.add('animate__animated'); */
    heart.classList.add('animate__animated', 'animate__bounceInLeft');
    heart2.classList.add('animate__animated', 'animate__bounceInLeft');
    num2.classList.add('animate__animated', 'animate__bounceInDown');

});

