let secretNumber = Math.floor(Math.random() * 10);

const input = document.querySelector('input[type="number"]');
const button = document.querySelector('[data-btnNumber]');
const message = document.getElementById('result-guess-num');
const span = document.getElementById('span-result');

message.style.display = 'none';

button.addEventListener('click', () => {
  const userGuess = Number(input.value);

  if (isNaN(userGuess) || userGuess < 0 || userGuess > 9) {
    message.style.display = 'block';
    message.style.color = 'red';
    message.textContent = 'Введіть число від 0 до 9';
    return;
  }

message.style.display = 'block';

  if (userGuess === secretNumber) {
    span.textContent = secretNumber;
    message.style.color = 'green';
    message.innerHTML = `Вітаю, ви вгадали число! <span id="span-result">${secretNumber}</span>`;
    secretNumber = Math.floor(Math.random() * 10);
  } else {
    message.style.color = 'red';
    message.textContent = 'Ви програли, спробуйте ще раз.';
  }
});