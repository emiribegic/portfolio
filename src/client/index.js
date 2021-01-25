import './styles/main.scss';
import profileImage from './img/eb-profile-img.png';
import ghImage from './img/github.svg';
import inImage from './img/linkedin.svg';
import twImage from './img/twitter.svg';
import translateToGerman from './js/translateButton';

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

const ghImg = document.getElementById('gh-img');
ghImg.src = ghImage;

const inImg = document.getElementById('in-img');
inImg.src = inImage;

const twImg = document.getElementById('tw-img');
twImg.src = twImage;
