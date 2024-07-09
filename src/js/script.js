
const menuHamburguer = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu-links li a');

let header = document.getElementById('header');


menuHamburguer.addEventListener('click', () => {
  menu.classList.toggle('active');
});

links.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.toggle('active');
  })
})

window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
      header.style.background = '#191919'
    } else {
      header.style.background = 'transparent'
    }
  
})