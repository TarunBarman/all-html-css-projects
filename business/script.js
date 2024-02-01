const menu = document.getElementById('menu');
const close = document.getElementById('close');
const header = document.getElementById('header');

if(menu) {
    menu.addEventListener('click', () => {
        nav.classList.add('active');
    });
}
if(close) {
    close.addEventListener('click', () => {
        nav.classList.add('active');
    });
}
