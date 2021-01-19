import { example } from './js/example';
import './styles/main.scss';

const navbar = document.querySelector('.page__header');
const hero = document.querySelector('.contents__hero');

// Dynamically get the height of the navbar and calculate the hight of hero
window.addEventListener('load', () => {
	const navbarHeight = navbar.offsetHeight;
	console.log(navbarHeight);
	hero.style.height = `calc(100vh - ${navbarHeight}px)`;
});

export { example };
