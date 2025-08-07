import trexGif from '../images/trex-animation.gif';
const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const startBtn = document.getElementById('startBtn');
const clouds = document.getElementById('cloudContainer');
const bgMusic = new Audio('../audio/dinosaur-game-music.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.3;

clouds.style.opacity = '0';

let gameStarted = false;
let isAlive;

function jump() {
  if (!gameStarted) return;
  if (!dino.classList.contains('jump')) {
    dino.classList.add('jump');
    setTimeout(() => {
      dino.classList.remove('jump');
    }, 400);
  }
}

function startGame() {
  if (gameStarted) return;
  gameStarted = true;
  startBtn.style.opacity = '0';

  bgMusic.currentTime = 0;
  bgMusic.play();

  dino.style.backgroundImage = `url(${trexGif})`;

  cactus.style.animation = 'block 1.7s infinite linear';
  cactus.style.opacity = '1';
  clouds.style.opacity = '1';

  isAlive = setInterval(() => {
    const dinoBottom = parseInt(
      getComputedStyle(dino).getPropertyValue('bottom')
    );
    const cactusLeft = parseInt(
      getComputedStyle(cactus).getPropertyValue('left')
    );

    const hitCactus = cactusLeft < 90 && cactusLeft > 40 && dinoBottom < 40;

    if (hitCactus) {
      bgMusic.pause();
      cactus.style.opacity = '0';
      clouds.style.opacity = '0';
      startBtn.style.opacity = '1';
      alert('Game Over!');
      clearInterval(isAlive);
      cactus.style.animation = 'none';
      dino.style.backgroundImage = "url('../images/trex-png.png')";
      gameStarted = false;
    }
  }, 10);
}

document.addEventListener('keydown', event => {
  if (event.code === 'ArrowUp' || event.code === 'Space') {
    event.preventDefault();
    jump();
  }
});

document.addEventListener('click', event => {
  if (event.target !== startBtn) {
    jump();
  }
});

startBtn.addEventListener('click', startGame);
