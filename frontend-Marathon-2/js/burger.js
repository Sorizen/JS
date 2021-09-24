const burger = document.querySelector('.humburger-menu');
const linksBurger = document.querySelectorAll('.menu-list__item');
const menuElem = document.querySelector('.menu')

burger.addEventListener('click', () => {
    menuElem.classList.toggle('menu-active');
    burger.classList.toggle('humburger-menu-active');
})

linksBurger.forEach(link => {
    link.addEventListener('click', () => {
        menuElem.classList.remove('menu-active');
        burger.classList.remove('humburger-menu-active');
    })
})
