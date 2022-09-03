const mobile__menu = document.querySelector('.mobile__menu');
const mobileMenu__content = document.querySelector('.mobile-menu__content');

mobile__menu.addEventListener("click", despliegue);

function despliegue(){
  console.log('menu de movil');
  mobileMenu__content.classList.toggle('inactive');
}