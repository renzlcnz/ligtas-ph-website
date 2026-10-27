const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const checkboxes = [...document.querySelectorAll(".check-item input[type='checkbox']")];
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

function updateChecklist() {
  const completed = checkboxes.filter((box) => box.checked).length;
  if (progressText) progressText.textContent = `${completed} of ${checkboxes.length}`;
  if (progressBar) progressBar.style.width = `${checkboxes.length ? completed / checkboxes.length * 100 : 0}%`;
}
checkboxes.forEach((box) => box.addEventListener("change", updateChecklist));

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
