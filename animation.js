const toggleInput = document.querySelector("#toggle");
const toggleLabel = document.querySelector(".hamburger");

const navLinks = document.querySelectorAll(".nav-wrapper a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleInput.checked = false;
  });
});