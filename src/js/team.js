import imgUrl1 from './images/team/ivan-logo.jpg';
import imgUrl2 from './images/team/max-logo.png';
import imgUrl3 from './images/team/oleg-logo.png';

  const team = [
    {
      name: 'Nierochron',
      info: 'Team Lid of our team. Created sections: modal window, time calculator, Google dinosaur, football, 3 numbers',
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

  const image = document.getElementById('team-photo');
const nextButton = document.getElementById('team-button-right');
  console.log(nextButton);

  let currentIndex = 0;

  function firstImg() {
    const currentPhoto = team[currentIndex];
    image.src = currentPhoto.img;
    image.alt = `Фото ${currentPhoto.name}`;
  }

nextButton.addEventListener('click', () => {
    console.log("Hello World");
    currentIndex++;
    if (currentIndex >= team.length) {
      currentIndex = 0;
    }
    firstImg();
  });
  firstImg();