const cancelButton = document.querySelector('.cancelicon');
const hamburger = document.querySelector('.bars');
const navMenu = document.querySelector('.navMenu');

function myFunction() {
  navMenu.style.left = '200%';
}

cancelButton.addEventListener('click', myFunction);

function hideMenu() {
  navMenu.style.left = '0';
}

hamburger.addEventListener('click', hideMenu);

document.querySelectorAll('.navMenu li').forEach((n) => n.addEventListener('click', () => {
  navMenu.style.left = '200%';
}));
