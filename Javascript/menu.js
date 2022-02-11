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
