let menu = document.querySelector('.white-menu');

menu.addEventListener('click', fMenu);

function fMenu() {
    let a = document.querySelector('.tablet-menu');
    let b = document.querySelector('.main-title');

    b.style.display = b.style.display === 'none' ? 'block' : 'none';
    a.style.display = a.style.display === 'block' ? 'none' : 'block';
}