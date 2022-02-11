var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};

var slideLeft = {
    distance: '150%',
    origin: 'right',
    opacity: null
};
var slideRight = {
    distance: '150%',
    origin: 'left',
    opacity: null
};
var slideDown = {
    distance: '30%',
    origin: 'top',
    opacity: null
};

ScrollReveal().reveal('.slide-up', slideUp);
ScrollReveal().reveal('.slide-left', slideLeft);
ScrollReveal().reveal('.slide-right', slideRight);
ScrollReveal().reveal('.slide-down', slideDown);

ScrollReveal().reveal('.slide-leftnav', slideLeft, { Duration : 500,  easing: 'ease-in'});
ScrollReveal().reveal('#about');
ScrollReveal().reveal('main');
var slideRightFooter = {
    distance: '150%',
    origin: 'left',
    opacity: null
};
ScrollReveal().reveal('.footer-copyright .footer-navigation, .footer-social', slideRightFooter,{easing:'ease', Duration : 1000 });

ScrollReveal().reveal('.attribution', slideLeft, { delay : 500 });

ScrollReveal().reveal('#about', slideDown, { easing: 'ease-in', delay: 3500});
ScrollReveal().reveal('#creations',{ delay: 500});
ScrollReveal().reveal('#technologies',{ delay: 500});
ScrollReveal().reveal('#more',{ delay: 500});