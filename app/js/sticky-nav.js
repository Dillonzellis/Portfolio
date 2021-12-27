const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("a");
const navbar = document.querySelector("nav");

const options = {
  threshold: 0.5,
  // rootMargin: "-110px",
};

const observer = new IntersectionObserver((entries, observer) => {
  let current = "";

  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    current = entry.target.getAttribute("id");

    navlinks.forEach((li) => {
      li.classList.remove("active");
      const href = li.getAttribute("href").substring(1);
      if (href === current) {
        li.classList.add("active");
      }
      if (current !== "home") {
        console.log(`home`);
        navbar.classList.remove("hidden");
      }

      if (current == "home") {
        navbar.classList.add("hidden");
      }
    });
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
