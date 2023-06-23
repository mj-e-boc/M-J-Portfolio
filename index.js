const cancelButton = document.querySelector('.cancelicon');
const hamburger = document.querySelector('.bars');
const navMenu = document.querySelector('.navMenu');

function myFunction() {
  navMenu.style.left = '200%';
}

cancelButton.addEventListener('click', myFunction);

function hideMenu() {
  navMenu.style.left = '0';
}

hamburger.addEventListener('click', hideMenu);
document.querySelectorAll('.navMenu li').forEach((n) => n.addEventListener('click', () => {
  navMenu.style.left = '200%';
}));

// dynamic generation of cards

const cardDetails = [
  {
    id: 'modal1',
    backgroundImage: 'images/projects/Img Placeholder.svg',
    title: 'Multipost-stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry',
    technologies: ['HTML', 'Bootstrap', 'ruby on rails'],
    seeLive: '#',
  },

  {
    id: 'modal2',
    backgroundImage: 'images/projects/project background.svg',
    title: 'Proffessional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry',
    technologies: ['HTML', 'Bootstrap', 'ruby on rails'],
    seeLive: '#',
  },

  {
    id: 'modal3',
    backgroundImage: 'images/projects/project background.svg',
    title: 'Proffessional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry',
    technologies: ['HTML', 'Bootstrap', 'ruby on rails'],
    seeLive: '#',
  },

  {
    id: 'modal4',
    backgroundImage: 'images/projects/project background.svg',
    title: 'Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry',
    technologies: ['HTML', 'Bootstrap', 'ruby on rails'],
    seeLive: '#',
  },

  {
    id: 'modal5',
    backgroundImage: 'images/projects/project background.svg',
    title: 'Proffessional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry',
    technologies: ['HTML', 'Bootstrap', 'ruby on rails'],
    seeLive: '#',
  },

  {
    id: 'modal6',
    backgroundImage: 'images/projects/project background.svg',
    title: 'Proffessional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry',
    technologies: ['HTML', 'Bootstrap', 'ruby on rails'],
    seeLive: '#',
  },
];

const cardsContainer = document.querySelector('.grids');
const cardsMethods = () => {
  cardDetails.map((cardData) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card2');
    cardElement.style.backgroundImage = `${cardData.backgroundImage}`;
    cardElement.innerHTML = `
  <div class='textitems'>
            <h2>${cardData.title}</h2>
            <p>
              ${cardData.description}
            </p>
            <ul>
              <li>${cardData.technologies[0]}</li>
              <li>${cardData.technologies[1]}</li>
              <li>${cardData.technologies[2]}</li>
            </ul>
          </div>
          <button class='modal-open' 'id='${cardData.id}'>See project</button>`;
    cardsContainer.appendChild(cardElement);
    return cardsContainer;
  });
};

cardsMethods();

// creating popup
const popupContainer = document.querySelector('.popup-modal');

const popUpMethods = () => {
  cardDetails.every((popUpData) => {
    const popUpContent = document.createElement('div');
    popUpContent.classList.add('popup-content');
    popUpContent.innerHTML = `<div class='modal-card'>
          <div class='popupcancel' data-close-button>
            <img
              src='./images/projects/footericons/popupcancel.svg'
              alt='cancelbutton'
            />
          </div>
          <h2>${popUpData.title}</h2>
          <ul>
            <li>${popUpData.technologies[0]}</li>
            <li>${popUpData.technologies[1]}</li>
            <li>${popUpData.technologies[2]}</li>
          </ul>
          <div class='popupimage'>
            <img src='./images/popiest.svg' alt='' />
          </div>
          <div class='popupara'>
            <p>
             ${popUpData.description}
            </p>
          </div>

          <div class='buttonstyling'>
            <button>
              <div class='buttonstyle fixingbutton'>
                <p>See live</p>
                <img
                  src='./images/projects/footericons/iconseeLive.svg'
                  alt='button image'
                />
              </div>
            </button>
            <button data-modal-target>
              <div class='buttonstyle'>
                <p>See source</p>
                <img
                  src='./images/projects/footericons/button2image.svg'
                  alt='button image'
                />
              </div>
            </button>
          </div>
        </div>`;
    popupContainer.appendChild(popUpContent);
  });
};

popUpMethods();
const modal = document.querySelector('.popup-modal');
const modalButtons = document.querySelectorAll('.modal-open');
const modalClose = document.querySelectorAll('.popupcancel');
const modalMethods = () => {
  modalButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.style.visibility = 'visible';
    });
  });
  modalClose.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.classList) modal.style.visibility = 'hidden';
    });
  });
};

modalMethods();
