const cancelButton = document.querySelector(".cancelicon");
const hamburger = document.querySelector(".bars");
const navMenu = document.querySelector(".navMenu");
const menuItem = document.getElementsByClassName("menuItem");
const activePage = document.querySelectorAll;

cancelButton.addEventListener("click", myFunction);

function myFunction() {
  navMenu.style.left = "200%";
}

hamburger.addEventListener("click", hideMenu);

function hideMenu() {
  navMenu.style.left = "0";
}

document.querySelectorAll(".navMenu li").forEach((n) =>
  n.addEventListener("click", function () {
    navMenu.style.left = "200%";
    if ((n = 0)) {
      window.location = "google.com";
    }
  })
);
