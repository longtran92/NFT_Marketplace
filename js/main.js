const navLinksMenu = document.querySelector(".nav-links");
const offCanvasToggle = document.querySelector(".offCanvas-toggle");

offCanvasToggle.addEventListener("click", () => {
  navLinksMenu.classList.toggle("show");
  offCanvasToggle.classList.toggle("open");
});
