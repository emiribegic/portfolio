// SASS file
import './styles/main.scss';

// JS file
import { enableResponsiveNav } from './js/app';

// Images
import profileImage from './img/eb-profile-img.png';
import projectImage0 from './img/eb-recipe-app.png';
import projectImage1 from './img/eb-portfolio.png';
import projectImage2 from './img/eb-travel-app.png';

const profileImg = document.getElementById('about__img');
profileImg.src = profileImage;

const projectImg0 = document.getElementById('project-img-0');
projectImg0.src = projectImage0;

const projectImg1 = document.getElementById('project-img-1');
projectImg1.src = projectImage1;

const projectImg2 = document.getElementById('project-img-2');
projectImg2.src = projectImage2;
