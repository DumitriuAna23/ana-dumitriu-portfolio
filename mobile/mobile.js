
const menu = document.querySelector(".menu-overlay");
const openBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".menu-close");

if (openBtn && menu) {
  openBtn.addEventListener("click", () => {
    menu.classList.add("open");
    document.body.style.overflow = "hidden";
  });
}
if (closeBtn && menu) {
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("open");
    document.body.style.overflow = "";
  });
}
menu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    document.body.style.overflow = "";
  });
});
