/* BURGER MENU */
const menu = document.querySelector('.mobile-menu');
const header = document.querySelector('nav');
const body = document.querySelector('body');

menu.addEventListener('click', function(){
    console.log('open menu'); 
    if(header.classList.contains('open') & body.classList.contains('open')) {
        header.classList.remove('open');
        body.classList.remove('open');
    }
    else {
        header.classList.add('open');
        body.classList.add('open');
    }
});


ScrollReveal(); 

var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null, 
    reset: true
};

var slideLeft = {
    distance: '150%',
    origin: 'right',
    opacity: null,
    reset: true
};
var slideRight = {
    distance: '150%',
    origin: 'left',
    opacity: null,
    reset: true
};
var slideDown = {
    distance: '30%',
    origin: 'top',
    opacity: null,
    reset: true
};

ScrollReveal().reveal('.slide-up', slideUp);
ScrollReveal().reveal('.slide-left', slideLeft);
ScrollReveal().reveal('.slide-right', slideRight);
ScrollReveal().reveal('.slide-down', slideDown);
ScrollReveal().reveal('.slide-leftnav', slideLeft, { Duration : 500,  easing: 'ease-in'});

ScrollReveal().reveal('main');
var slideRightFooter = {
    distance: '150%',
    origin: 'left',
    opacity: null,
    reset: true
};

ScrollReveal().reveal('#about', {  reset: true, easing: 'ease-in', delay: 100});
ScrollReveal().reveal('#creations',{  reset: true, easing: 'ease-in', delay: 500});
ScrollReveal().reveal('#technologies',{  reset: true,easing: 'ease-in', delay: 500});
ScrollReveal().reveal('#more',{  reset: true,easing: 'ease-in', delay: 500});
ScrollReveal().reveal('#contact',{  reset: true,easing: 'ease-in', delay: 500});
ScrollReveal().reveal('.section_animation',{  reset: true,easing: 'ease-in', delay: 550, Duration: 500});
ScrollReveal().reveal('#wrapperwrapper',{  reset: true,easing: 'ease-in', delay: 750,  Duration: 500});

ScrollReveal().reveal('.footer-copyright, .footer-navigation, .footer-social',slideDown,{ reset: true,easing:'ease', delay : 600 });
ScrollReveal().reveal('.attribution', { reset: true,easing: 'ease-in', delay : 500 });
