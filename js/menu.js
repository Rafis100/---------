const menu = document.querySelector(".burger"),
    nav = document.querySelector(".header-nav");

menu.addEventListener("click", function() {
  nav.classList.toggle("open");
  menu.classList.toggle("active");
});

document.addEventListener("click", function(event) {
  if (!event.target.closest(".burger") && !event.target.closest(".header-nav")) {
    nav.classList.remove("open");
    menu.classList.remove("active");
  }
  if (event.target.classList.contains("header-elem")) {
    nav.classList.remove("open");
    menu.classList.remove("active");
  }
  if (event.target.classList.contains("header-nav")) {
    nav.classList.remove("open");
    menu.classList.remove("active");
  }
});