let secretNumber = Math.floor(Math.random() * 10);

const input = document.querySelector('#guess-number');
const button = document.querySelector('[data-btnNumber]');
const message = document.getElementById('result-guess-num');

button.addEventListener('click', () => {
  const userGuess = Number(input.value);
    console.log("userGuess", userGuess)

  if (isNaN(userGuess) || userGuess < 0 || userGuess > 9) {
    message.style.color = 'red';
    message.textContent = 'Введіть число від 0 до 9';
    return;
  }

  if (userGuess === secretNumber) {
    span.textContent = secretNumber;
    message.style.color = 'green';
    message.innerHTML = `Вітаю, ви вгадали число! <span id="span-result">${secretNumber}</span>`;
  } else {
    message.style.color = 'red';
    message.innerHTML = `Ви програли, спробуйте ще раз! Компютер загадав <span id="span-result">${secretNumber}</span>`;
  }
});