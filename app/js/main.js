// Sticky Nav
// When the user scrolls the page, execute myFunction
// window.onscroll = function () {
//   myFunction();
// };

// Get the navbar
// var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

//nav bar link current class
const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("a");
const spacer = document.querySelector(".skills-spacer");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 5) {
      current = section.getAttribute("id");
    }
  });

  navlinks.forEach((li) => {
    li.classList.remove("active");
    const href = li.getAttribute("href").substring(1);
    if (href === current) {
      li.classList.add("active");
    }
    // if (href === "skills") {
    //   spacer.classList.add("spacer-height");
    // }
  });
});

//remove navbar from home screen
// const nav = document.querySelector("#navbar");

// window.addEventListener("scroll", () => {
//   console.log(scrollY);

//   if (nav.classList.contains("hidden")) {
//     if (scrollY >= 749) {
//       nav.classList.remove("hidden");
//     }
//   }

//   if (scrollY <= 749) {
//     nav.classList.add("hidden");
//   }

// if (scrollY < 750) {
//   nav.classList.add("hidden");
// } else
// });
