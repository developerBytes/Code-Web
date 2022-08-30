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

/* Scroll Section Active Link */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*Change Background Header*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 80) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*Scroll Top*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUpclassList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);
