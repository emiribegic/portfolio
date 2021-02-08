// SASS file
import './styles/main.scss';

// JS file
import { enableBurgerMenu } from './js/activateHamburger';
import { createNav } from './js/app';

// Images
import profileImage from './img/eb-profile-img.png';
import projectImage1 from './img/eb-travel-app.png';
import projectImage3 from './img/eb-weather-journal-app.png';
import projectImage4 from './img/eb-personal-blog.png';

const profileImg = document.getElementById('about__img');
profileImg.src = profileImage;

const projectImg1 = document.getElementById('project-img-1');
projectImg1.src = projectImage1;

const projectImg3 = document.getElementById('project-img-3');
projectImg3.src = projectImage3;

const projectImg4 = document.getElementById('project-img-4');
projectImg4.src = projectImage4;

// TODO Why do i need to export & where to export again?
// export { enableBurgerMenu };
