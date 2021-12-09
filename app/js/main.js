console.log("yeppers");

// Sticky Nav
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//nav bar link current class
const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navlinks.forEach((li) => {
    li.classList.remove("active");
    const href = li.getAttribute("href").substring(1);
    if (href === current) {
      li.classList.add("active");
    }
  });
});
