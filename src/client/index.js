import './styles/main.scss';
import profileImage from './img/eb-profile-img.png';
import projectImage1 from './img/eb-travel-app.png';
import projectImage2 from './img/eb-sentiment-analysis-app.png';
import projectImage3 from './img/eb-weather-journal-app.png';
import projectImage4 from './img/eb-personal-blog.png';
import translateText from './js/translateButton';

const header = document.querySelector('.page-header');
const hero = document.querySelector('.hero');
const contact = document.querySelector('.contact');
const footer = document.querySelector('.page-footer');

// Dynamically get the height of the header and calculate the hight of hero
window.addEventListener('load', () => {
	const headerHeight = header.offsetHeight;
	const footerHeight = footer.offsetHeight;
	console.log(headerHeight, footerHeight);
	hero.style.height = `calc(100vh - 1rem - ${headerHeight}px)`;
	contact.style.height = `calc(100vh - 1rem - ${footerHeight}px)`;
});

// Images
const profileImg = document.getElementById('profile-img');
profileImg.src = profileImage;

const projectImg1 = document.getElementById('project-img-1');
projectImg1.src = projectImage1;

const projectImg2 = document.getElementById('project-img-2');
projectImg2.src = projectImage2;

const projectImg3 = document.getElementById('project-img-3');
projectImg3.src = projectImage3;

const projectImg4 = document.getElementById('project-img-4');
projectImg4.src = projectImage4;
