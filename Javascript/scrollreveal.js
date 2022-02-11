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
    opacity: null
};

ScrollReveal().reveal('#about', { easing: 'ease-in', delay: 100});
ScrollReveal().reveal('#creations',{ delay: 500});
ScrollReveal().reveal('#technologies',{ delay: 500});
ScrollReveal().reveal('#more',{ delay: 500});
ScrollReveal().reveal('#contact',{ delay: 500});
ScrollReveal().reveal('.footer-copyright, .footer-navigation, .footer-social', slideRightFooter,{easing:'ease', delay : 1000 });
ScrollReveal().reveal('.attribution', slideLeft, { delay : 1000 });