const hamburger = document.getElementById("hamburger-l");
const navLinks = document.getElementById("navLinks-l");
const navItems = document.querySelectorAll(".nav-link-l");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Active link switching
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navItems.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    navLinks.classList.remove("show"); // close menu on mobile
  });
});
