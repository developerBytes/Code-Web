/* Show Menu */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  //Vaildate that variable exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      /*We add the show-menu class to the div tag with the nav-menu class*/
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/* Remove Show Menu */
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navmenu = document.getElementById("nav-menu");
  /*when we click on each nav__link we remove the show-menu class */
  navmenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

