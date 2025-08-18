const btn = document.getElementById("runBtn");
const container = document.querySelector(".catch-me-container");

function centerButton() {
  const centerX = (container.clientWidth - btn.offsetWidth) / 2;
  const centerY = (container.clientHeight - btn.offsetHeight) / 2;

  btn.style.left = `${centerX}px`;
  btn.style.top = `${centerY}px`;
}

function moveButton() {
  const delay = Math.random() * 200 + 100;

  setTimeout(() => {
    const maxX = container.clientWidth - btn.offsetWidth;
    const maxY = container.clientHeight - btn.offsetHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    btn.style.left = `${newX}px`;
    btn.style.top = `${newY}px`;
  }, delay);
}

window.addEventListener('load', centerButton);

btn.addEventListener("mouseenter", moveButton);
btn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveButton();
});

btn.addEventListener("click", () => {
  alert("Вітаю, ви перемогли!");
  setTimeout(centerButton, 50);
});
