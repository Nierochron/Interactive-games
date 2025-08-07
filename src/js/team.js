document.addEventListener('DOMContentLoaded', () => {
  const team = [
    {
      name: 'Nierochron',
      info: 'Team Lid of our team. Created sections: modal window, time calculator, Google dinosaur, football, 3 numbers',
      img: './images/team/ivan-logo.jpg',
    },
    {
      name: 'The_kotik',
      info: 'Created sections: team, scientists, footer.',
      img: './images/team/max-logo.png',
    },
    {
      name: 'OlegMusu',
      info: 'Created sections: born year, guess number, rock paper scissors, calculator',
      img: './images/team/oleg-logo.png',
    },
  ];

  const image = document.getElementById('team-photo');
  const nextButton = document.getElementById('team-button-right');

  let currentIndex = 0;

  function firstImg() {
    const currentPhoto = team[currentIndex];
    image.src = currentPhoto.img;
    image.alt = `Фото ${currentPhoto.name}`;
  }

  nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= team.length) {
      currentIndex = 0;
    }
    
    console.log('Завантажую картинку:', currentPhoto.img);
    firstImg();
  });

  console.log('Завантажую картинку:', currentPhoto.img);
  firstImg();
});