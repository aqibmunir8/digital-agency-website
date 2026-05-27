let nav = document.querySelector("nav");

let navLinks = nav.querySelectorAll("a");

function handleNavLinkClick() {
  nav.classList.toggle("open");
}

navLinks.forEach((link) => {
  console.log("hello");
  link.addEventListener("click", handleNavLinkClick);
});
