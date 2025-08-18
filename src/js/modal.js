const modal = document.getElementById("welcomeModal");
const modalClose = document.getElementById("modalClose");
const body = document.body;
const html = document.documentElement;
const saveBtn = document.querySelector(".modal-save-button")

const scrollbarWidth = window.innerWidth - html.clientWidth;

function disableScroll() {
  body.style.overflow = "hidden";
  body.style.marginRight = scrollbarWidth + "px";
}

function enableScroll() {
  body.style.overflow = "";
  body.style.marginRight = "";
}

function openModal() {
  modal.style.display = "flex";
  disableScroll();
}

function closeModal() {
  modal.style.display = "none";
  enableScroll();
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
window.addEventListener("load", () => {
  openModal();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    closeModal();
  }
});

saveBtn.addEventListener("click", closeModal);