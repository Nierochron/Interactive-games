import imgUrl1 from '../images/team/ivan-logo.jpg';
import imgUrl2 from '../images/team/max-logo.png';
import imgUrl3 from '../images/team/oleg-logo.png';

  const team = [
    {
      name: 'Nierochron',
      info: 'Team Lead of our team. Created sections: modal window, time calculator, Google dinosaur, football, 3 numbers        ',
      img: imgUrl1,
    },
    {
      name: 'The_kotik',
      info: 'Created sections: team, scientists, footer. Added images appearance animations, and interactive elements.           ',
      img: imgUrl2,
    },
    {
      name: 'OlegMusu',
      info: 'Created sections: born year, guess number, rock paper scissors, calculator. Implemented random generation of results',
      img: imgUrl3,
    },
  ];

const prevButton = document.getElementById('team-button-left');
const nextButton = document.getElementById('team-button-right');
const imgTitle = document.querySelector(".team-name");
const imgInfo = document.querySelector(".team-info");
const indicators = Array.from(document.querySelectorAll('.team-svg-indicators'));

let currentIndex = 0;
let isAnimating = false;
let image = document.getElementById('team-photo');

function updateIndicators() {
  indicators.forEach((el, i) => {
    el.classList.toggle('active', i === currentIndex);
  });
}


  function firstImg() {
    const currentPhoto = team[currentIndex];
    image.src = currentPhoto.img;
    image.alt = `Фото ${currentPhoto.name}`;
    image.style.width = "300px";
    imgTitle.textContent = currentPhoto.name;
    imgInfo.textContent = currentPhoto.info;
    updateIndicators();
}

function animateSlide(direction, newIndex) {
  if (isAnimating || newIndex === currentIndex) return;
  isAnimating = true;

  const photoContainer = image.parentElement;
  const oldImg = image;

  const newImg = document.createElement('img');
  newImg.className = 'team-photo';
  newImg.width = 300;
  newImg.height = 300;
  newImg.src = team[newIndex].img;
  newImg.alt = `Фото ${team[newIndex].name}`;

  imgTitle.textContent = team[newIndex].name;
  imgInfo.textContent = team[newIndex].info;
  currentIndex = newIndex;
  updateIndicators();

  if (direction === 'left') {
    newImg.classList.add('slide-from-right');
    oldImg.classList.add('slide-to-left');
  } else {
    newImg.classList.add('slide-from-left');
    oldImg.classList.add('slide-to-right');
  }

  photoContainer.appendChild(newImg);

  requestAnimationFrame(() => {
    newImg.classList.remove('slide-from-right', 'slide-from-left');
  });

  setTimeout(() => {
    photoContainer.removeChild(oldImg);
    image = newImg;
    isAnimating = false;
  }, 400);
}

firstImg();

prevButton.addEventListener('click', () => {
  const newIndex = (currentIndex - 1 + team.length) % team.length;
  animateSlide('right', newIndex);
});

nextButton.addEventListener('click', () => {
  const newIndex = (currentIndex + 1) % team.length;
  animateSlide('left', newIndex);
});

indicators.forEach((el, i) => {
  el.addEventListener('click', () => {
    if (i === currentIndex) return;
    const direction = i > currentIndex ? 'left' : 'right';
    animateSlide(direction, i);
  });
});
  
firstImg();