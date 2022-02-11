window.sr = ScrollReveal(); 

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
ScrollReveal().reveal('.footer-copyright, .footer-navigation, .footer-social',slideRight,{easing:'ease', delay : 600 });
ScrollReveal().reveal('.attribution', slideLeft, { delay : 500 });

var smoothScroll = {
    speed: 0,
    delay: 10, // en ms
    timer: null,
    scrollSpeed: 3,
    inertia: 0.95,
    init: function(){
        this.setEventsListeners();
    },
    setEventsListeners: function(){
    	(function(self) {
    		var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
			document.addEventListener(mousewheelevt, function(e) {self.setSpeed(e)}, false);
		})(this);
    },
    setSpeed: function(e){
    	this.speed += e.wheelDelta < 0 ? -this.scrollSpeed : this.scrollSpeed;
    	if(this.timer == null){
    		this.timer = setTimeout(this.smoothScroll, this.delay, this); 
    	}
    	e.preventDefault();
    },
    smoothScroll: function(scope){
		var self = scope;
    	self.speed *= self.inertia;

    	window.scrollTo(0, window.scrollY - self.speed );

    	if(self.speed < self.inertia && self.speed > -self.inertia){
    		self.speed = 0;
    		clearTimeout(self.timer);
    		self.timer = null;
    	}else{
    		self.timer = setTimeout(self.smoothScroll, self.delay, self);
    	}
    }
}

smoothScroll.init();