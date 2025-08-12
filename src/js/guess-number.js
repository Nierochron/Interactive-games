let secretNumber = Math.floor(Math.random() * 10);

  const input = document.querySelector('input[type="number"]');
  const button = document.querySelector('[data-btnNumber]');
  const message = document.getElementById('result-guess-num');
  const span = document.getElementById('span-result');

  message.style.display = 'none';

  button.addEventListener('click', () => {
    const userGuess = Number(input.value);

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 9) {
      alert('Введіть число від 0 до 9');
      return;
    }

    if (userGuess === secretNumber) {
      span.textContent = secretNumber;
      message.style.display = 'block';
      secretNumber = Math.floor(Math.random() * 10);
    } else {
      alert('Ви програли, спробуйте ще раз.');
    }
  });