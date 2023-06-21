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

const contentArray = [
  {
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    languages: ['CSS','HTML', 'Bootstrap', 'Ruby'],
    livelink: '',
    seesource: '',
  },
  {
    title: 'Data DashboardHealthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    livelink: '',
    seesource: '',
  },
  {
    title: 'Data DashboardHealthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    livelink: '',
    seesource: '',
  },
  {
    title: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    livelink: '',
    seesource: '',
  },
  {
    title: 'Profesional Art Printing Data More',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    livelink: '',
    seesource: '',
  },
  {
    title: 'Data DashboardHealthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    livelink: '',
    seesource: '',
  },
  {
    title: 'Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.',
    languages: ['HTML', 'Bootstrap', 'Ruby'],
    livelink: '',
    seesource: '',
  },
];