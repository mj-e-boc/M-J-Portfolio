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
    value: 'card1',
    backgroundImage: 'images/projects/Img Placeholder.svg',
    title: 'Card1',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry',
    technologies: ['HTML', 'Bootstrap', 'python'],
    seeLive: '#',
  },

  {
    value: 'card2',
    backgroundImage: 'images/projects/project background.svg',
    title: 'card2',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry',
    technologies: ['HTML', 'Bootstrap', 'python'],
    seeLive: '#',
  },

  {
    value: 'card3',
    backgroundImage: 'images/projects/project background.svg',
    title: 'card3',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry',
    technologies: ['HTML', 'Bootstrap', 'python'],
    seeLive: '#',
  },

  {
    value: 'card4',
    backgroundImage: 'images/projects/project background.svg',
    title: 'card4',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry',
    technologies: ['HTML', 'Bootstrap', 'python'],
    seeLive: '#',
  },

  {
    value: 'card5',
    backgroundImage: 'images/projects/project background.svg',
    title: 'Proffessional Art Printing Data',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry',
    technologies: ['HTML', 'Bootstrap', 'python'],
    seeLive: '#',
  },

  {
    value: 'card6',
    backgroundImage: 'images/projects/project background.svg',
    title: 'Proffessional Art Printing Data',
    description:
      'A daily selection of  privately personalized reads; no accounts or sign-ups required. Has been the industry',
    technologies: ['HTML', 'Bootstrap', 'python'],
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
          <button class='modal-open' class='${cardData.value}' onclick ='getId(this)'>See project</button>`;
    cardsContainer.appendChild(cardElement);
    return cardsContainer;
  });
};

cardsMethods();

// creating popup

const openPopUpButtons = document.querySelectorAll('.modal-open');
const openModal = document.querySelector('.popup-modal');

let v = 0;
openPopUpButtons.forEach((btn) => {
  v += 1;

  const popContent = document.createElement('div');
  popContent.classList.add('popup-content');
  popContent.innerHTML = `
  <div class='modal-card'>
          <div class='popupcancel' data-close-button>
            <img
              src='./images/projects/footericons/popupcancel.svg'
              alt='cancelbutton'
            />
          </div>
          <h2>${cardDetails[v - 1].title}</h2>
          <ul>
            <li>${cardDetails[v - 1].technologies[0]}</li>
            <li>${cardDetails[v - 1].technologies[1]}</li>
            <li>${cardDetails[v - 1].technologies[2]}</li>
          </ul>
          <div class='popupimage'>
            <img src='./images/popiest.svg' alt='' />
          </div>
          <div class='popupara'>
            <p>
             ${cardDetails[v - 1].description}
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
        </div>


  `;
  btn.addEventListener('click', () => {
    document.querySelector('body').style.overflow = 'hidden';
    openModal.appendChild(popContent);
    openModal.style.visibility = 'visible';

    document.querySelector('.popupcancel').addEventListener('click', () => {
      openModal.removeChild(popContent);
      openModal.style.visibility = 'hidden';
      document.querySelector('body').style.overflow = 'scroll';
    });
  });
});
