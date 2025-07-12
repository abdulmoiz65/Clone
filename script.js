function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}
