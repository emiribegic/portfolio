import './styles/main.scss';
import profileImage from './img/eb-profile-img.png';
import projectImage1 from './img/eb-travel-app.png';
import projectImage3 from './img/eb-weather-journal-app.png';
import projectImage4 from './img/eb-personal-blog.png';

// const header = document.querySelector('.header');
// const hero = document.querySelector('.hero');

// // Dynamically get the height of the header and calculate the hight of hero
// window.addEventListener('load', () => {
// 	const headerHeight = header.offsetHeight;
// 	console.log(headerHeight);
// 	hero.style.height = `calc(100vh - 1rem - ${headerHeight}px)`;
// });

// Images
const profileImg = document.querySelector('.about__img');
profileImg.src = profileImage;

const projectImg1 = document.getElementById('project-img-1');
projectImg1.src = projectImage1;

const projectImg3 = document.getElementById('project-img-3');
projectImg3.src = projectImage3;

const projectImg4 = document.getElementById('project-img-4');
projectImg4.src = projectImage4;

// Hamburger
const hamburger = document.querySelector('.hamburger');
const headerList = document.querySelector('.header__list');
const headerItem = document.querySelectorAll('.header__item');

const animateNav = () => {
	hamburger.addEventListener('click', () => {
		// Toggle classes to animate 🍔
		hamburger.classList.toggle('is-active');
		// Toggle classes to show / hide nav
		headerList.classList.toggle('show');

		// TODO Make it more DRY????
		// Add animation to nav items
		headerItem.forEach((item, i) => {
			// console.log(i);
			if (item.style.animation) {
				item.style.animation = '';
			} else {
				item.style.animation = `navItemFade 0.7s ease forwards ${
					i / 7 + 0.3
				}s`;
			}
		});
	});
};

animateNav();
