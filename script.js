const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navber');



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navber.classList.toggle('active');
}