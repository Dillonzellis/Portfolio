const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("a");

const options = {
  threshold: 0.5,
  rootMargin: "-150px",
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
    });
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
