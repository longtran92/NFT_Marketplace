// OFF-CANVAS MENU FOR MOBILE
const navLinksMenu = document.querySelector(".nav-links");
const offCanvasToggle = document.querySelector(".offCanvas-toggle");

offCanvasToggle.addEventListener("click", () => {
  navLinksMenu.classList.toggle("show");
  offCanvasToggle.classList.toggle("open");
});

// $(document).ready(function () {
//   // REDIRECT LINK TO CREATE-ACCOUNT PAGE WHEN CLICK ON SIGN-UP BUTTON
//   $(".btn-signUp").on("click", function () {
//     document.location.href = "create-account.php";
//   });
// });

const btn = document.querySelector(".btn-signUp");
btn.addEventListener("click", function () {
  document.location.href = "create-account.php";
});
