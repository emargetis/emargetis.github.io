import "./style.css"
const menu = document.getElementById("menu");
const menuItems = [...document.getElementsByClassName("menuItem")];

menu.addEventListener("click", (e) => {
  e.preventDefault();

  menuItems.forEach(menuItem => {
    menuItem.classList.toggle("hidden")
    menuItem.classList.toggle("flex")
  })
})