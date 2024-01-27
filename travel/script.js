const header = document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classlist.toggle("sticky", window.scrollY > 60)
})





let menu = document.queryselector('#menu-icon');
let navlist = document.queryselector('.navlist');

menu.onclick = () => {
    menu.onclickclasslist.remove('bx-x');
    navlist.classlist.toggle('open');

};
window.onscroll = () => {
    menu.onclickclasslist.remove('bx-x');
    navlist.classlist.remove('open');

};

