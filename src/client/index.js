import './styles/main.scss';
import profileImage from './img/eb-profile-img.png';
import projectImage1 from './img/eb-travel-app.png';
import projectImage3 from './img/eb-weather-journal-app.png';
import projectImage4 from './img/eb-personal-blog.png';
import translateText from './js/translateButton';

const header = document.querySelector('.page-header');
const hero = document.querySelector('.hero');

// Dynamically get the height of the header and calculate the hight of hero
window.addEventListener('load', () => {
	const headerHeight = header.offsetHeight;
	console.log(headerHeight);
	hero.style.height = `calc(100vh - 1rem - ${headerHeight}px)`;
});

// Images
const profileImg = document.querySelector('.about__img');
profileImg.src = profileImage;

const projectImg1 = document.getElementById('project-img-1');
projectImg1.src = projectImage1;

const projectImg3 = document.getElementById('project-img-3');
projectImg3.src = projectImage3;

const projectImg4 = document.getElementById('project-img-4');
projectImg4.src = projectImage4;
