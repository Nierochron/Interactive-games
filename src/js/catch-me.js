const btn = document.getElementById("runBtn");
const container = document.querySelector(".catch-me-container");

function moveButton() {
  const maxX = container.clientWidth - btn.offsetWidth;
  const maxY = container.clientHeight - btn.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  btn.style.left = `${newX}px`;
  btn.style.top = `${newY}px`;
}

btn.addEventListener("mouseenter", moveButton);
btn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveButton();
});

btn.addEventListener("click", () => {
  alert("Вітаю, ви перемогли!");
});
