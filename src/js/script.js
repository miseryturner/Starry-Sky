//списки на странице редактирования карты

let list_item = document.getElementsByClassName('list__item'); 
let list_item_hidden = document.getElementsByClassName('list__item--hidden'); 
let click_icon = document.getElementsByClassName('click__icon');

for (let i = 0; i < list_item.length; i++) {
    list_item[i].addEventListener('click', () => {
        if(list_item_hidden[i].style.display == 'block') {
            list_item_hidden[i].style.display = 'none';
            click_icon[i].classList.remove('click__icon--open');
        } else {
            list_item_hidden[i].style.display = 'block';
            click_icon[i].classList.add('click__icon--open');
            for (let j = 0; j < list_item.length; j++) {
                if(list_item_hidden[j] != list_item_hidden[i]) {
                    list_item_hidden[j].style.display = 'none';
                    click_icon[j].classList.remove('click__icon--open');
                }
            }
        }
    });
}

//Вопросы на главной странице

let item__visible = document.getElementsByClassName('item--visible');
let item__hidden = document.getElementsByClassName('item--hidden');
let question__plus = document.getElementsByClassName('question__plus');

for (let i = 0; i < item__visible.length; i++) {
    item__visible[i].addEventListener('click', () => {
        if(item__hidden[i].style.display == 'block') {
            item__hidden[i].style.display = 'none';
            question__plus[i].classList.remove('question__plus--minus');
        } else {
            item__hidden[i].style.display = 'block';
            question__plus[i].classList.add('question__plus--minus');
            for (let j = 0; j < item__visible.length; j++) {
                if(item__hidden[j] != item__hidden[i]) {
                    item__hidden[j].style.display = 'none';
                    question__plus[j].classList.remove('question__plus--minus');
                }
            }
        }
    });
}

// меню в мобильной версии
let menu_btn = document.getElementById('menu_btn');
let hidden__mobile__menu = document.getElementsByClassName('hidden__mobile__menu');
let header__nav = document.getElementsByClassName('header__nav');
let header__language = document.getElementsByClassName('header__language');

menu_btn.addEventListener('click', () => {
    if(hidden__mobile__menu[0].style.display == 'none') {
        hidden__mobile__menu[0].style.display = 'block';
        header__language[1].style.display = 'none';
        header__nav[3].style.display = 'none';
        menu_btn.classList.add('menu__btn--close');
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    } else {
        hidden__mobile__menu[0].style.display = 'none';
        header__language[1].style.display = 'flex';
        header__nav[3].style.display = 'block';
        menu_btn.classList.remove('menu__btn--close');
        document.getElementsByTagName('body')[0].style.overflow = 'initial';
    }
    
});

//выбор формата для карты

let format = document.getElementsByClassName('size__version');
let item__selectBorder = document.querySelector('.item__select.border');

for (let i = 0; i < format.length; i++) {
    format[i].addEventListener('click', () => {
        if(i == 0) {
            format[0].classList.add('type__style--active');
            format[1].classList.remove('type__style--active');
            item__selectBorder.style.display = 'none';
        } else {
            format[1].classList.add('type__style--active');
            format[0].classList.remove('type__style--active');
            item__selectBorder.style.display = 'block';
        }
    })
}

//Фиксированная шапка

let header = $('.header');
    
$(window).scroll(function() {
    if($(this).scrollTop() > 200) {
        header.addClass('header_fixed');
    } else {
        header.removeClass('header_fixed');
    }
});