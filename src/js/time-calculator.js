const timeInput = document.querySelector('.time-calculator-input');
const timeOutput = document.getElementById('time-calculator-output');
const inputBtn = document.querySelector('.time-calculator-btn');
const unitButtons = document.querySelectorAll('button[data-unit]');

let currentUnit = 'hours';

unitButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentUnit = btn.dataset.unit;
    updateOutput();
  });
});

inputBtn.addEventListener('click', updateOutput);

function updateOutput() {
  let val = Number(timeInput.value);
  if (!val || val < 0) {
    timeOutput.textContent = '0 дн. 00:00:00';
    return;
  }

  let totalSeconds = 0;

  switch (currentUnit) {
    case 'hours':
      totalSeconds = val * 3600;
      break;
    case 'minutes':
      totalSeconds = val * 60;
      break;
    case 'seconds':
      totalSeconds = val;
      break;
  }

  const days = Math.floor(totalSeconds / 86400);
  totalSeconds %= 86400;

  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const pad = n => n.toString().padStart(2, '0');

  timeOutput.textContent = `${days} дн. ${pad(hours)}:${pad(minutes)}:${pad(
    seconds
  )}`;
}
