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
        }
    });
}