/* Здесь начинаеться JavaScript */

let links = document.querySelectorAll('a');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        alert(`Вы нажали на: ${links[i].text}`)
    })
}

let burgerBtn = document.getElementById('burger-btn');
let mobileMenu = document.getElementById('mobile_menu');
let mobileMenuClose = document.getElementById('mobileMenu_close');

const mobileMenuOn = () => {
    mobileMenu.classList = 'mobile__menu';
    document.body.style.overflow = 'hidden';
}

const mobileMenuOff = () => {
    mobileMenu.classList = 'mobile__menu-off';
    document.body.style.overflow = 'visible';
}

burgerBtn.addEventListener('click', mobileMenuOn);
mobileMenuClose.addEventListener('click', mobileMenuOff);