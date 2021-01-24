import { example } from './js/example';
import './styles/main.scss';

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

export { example };
