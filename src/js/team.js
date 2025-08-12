import imgUrl1 from './images/team/ivan-logo.jpg';
import imgUrl2 from './images/team/max-logo.png';
import imgUrl3 from './images/team/oleg-logo.png';

console.log(imgUrl1);


  const team = [
    {
      name: 'Nierochron',
      info: 'Team Lead of our team. Created sections: modal window, time calculator, Google dinosaur, football, 3 numbers',
      img: imgUrl1,
    },
    {
      name: 'The_kotik',
      info: 'Created sections: team, scientists, footer.',
      img: imgUrl2,
    },
    {
      name: 'OlegMusu',
      info: 'Created sections: born year, guess number, rock paper scissors, calculator',
      img: imgUrl3,
    },
  ];

  const prevButton = document.getElementById('team-button-left');
  const elImage = document.getElementById('team-photo');
  const elName = document.getElementById('team-name');
  const elInfo = document.getElementById('team-info');
  const nextButton = document.getElementById('team-button-right');

  let currentIndex = 0;

  function firstImg() {
    const currentPhoto = team[currentIndex];
    elImage.src = currentPhoto.img;
    elImage.alt = `Фото ${currentPhoto.name}`;
    elName.textContent = currentPhoto.name;
    elInfo.textContent = currentPhoto.info;
};

  prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = team.length - 1;
    }
    firstImg();
  });

  nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= team.length) {
      currentIndex = 0;
    }
    firstImg();
  });

firstImg();
