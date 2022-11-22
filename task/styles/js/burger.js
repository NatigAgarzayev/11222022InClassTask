const burger = document.querySelector('.burger'),
    menu = document.querySelector('.header__links'),
    body = document.querySelector('body');

burger.addEventListener('click', () => {
    if(!menu.classList.contains('active')){
        menu.classList.add('active');
        burger.classList.add('active');
        body.style.overflow = 'hidden';
    }
    else{
        menu.classList.remove('active');
        burger.classList.remove('active');
        body.style.overflow = '';
    }
});
