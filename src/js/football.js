const field = document.querySelector('.football-field');
const ball = document.querySelector('.football-ball');
const gate = document.querySelector('.football-gates');
const scoreEl = document.getElementById('score');

let score = 0;
const ballSize = 50;

function resetBallPosition() {
    ball.style.left = '50%';
    ball.style.top = '20%';
    ball.style.transform = 'translate(-50%, -20%)';
}

field.onclick = function (e) {
    const fieldRect = field.getBoundingClientRect();

    let x = e.clientX - fieldRect.left - ballSize / 2;
    let y = e.clientY - fieldRect.top - ballSize / 2;

    const maxX = field.clientWidth - ballSize;
    const maxY = field.clientHeight - ballSize;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
    ball.style.transform = 'none';

    setTimeout(() => {
        const ballX = parseFloat(ball.style.left);
        const ballY = parseFloat(ball.style.top);

        const gateX = gate.offsetLeft;
        const gateY = gate.offsetTop;
        const gateW = gate.offsetWidth;
        const gateH = gate.offsetHeight;

        const isInside =
            ballX + ballSize > gateX &&
            ballX < gateX + gateW &&
            ballY + ballSize > gateY &&
            ballY < gateY + gateH;

        if (isInside) {
            score++;
            scoreEl.textContent = score;
            setTimeout(resetBallPosition, 300);
        }
    }, 300);
};
