const team = [
  {
    name: 'Nierochron',
    info: 'Team Lid of our team. Created sections: modal window, time calculator, Google dinosaur, football, 3 numbers',
    img: 'images/team/ivan-logo.jpg',
  },
  {
    name: 'The_kotik',
    info: 'Created sections: team, scientists, footer.',
    img: 'images/team/max-logo.png',
  },
  {
    name: 'OlegMusu',
    info: 'Created sections: born year, guess number, rock paper scissors, calculator',
    img: 'images/team/oleg-logo.png',
  },
];


const photoContainer = document.getElementById('team-photo');
team.forEach(member => {
  const img = document.createElement('img');
  img.src = member.img;
  img.alt = `Фото ${member.name}`;
  galleryContainer.appendChild(img);
});
