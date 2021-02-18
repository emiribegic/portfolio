const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger');
const headerList = document.querySelector('.header__list');

// Responsive Nav Menu
export const enableResponsiveNav = () => {
	// 1. Nav list items
	const generateList = target => {
		const list = document.createElement('li');
		const anchor = document.createElement('a');
		list.classList.add('header__item');
		anchor.classList.add('link');
		anchor.setAttribute('href', `#${target.id}`);
		anchor.innerText = target.dataset.nav;

		if (anchor.innerText !== 'undefined') {
			list.appendChild(anchor);
			headerList.appendChild(list);
		}
	};

	generateList(header);
	sections.forEach(section => generateList(section));
	const headerItem = document.querySelectorAll('.header__item');

	// 2. Toggler
	const toggleHam = () => {
		// Toggle classes to open / close 🍔
		hamburger.classList.toggle('is-active');
		// Toggle classes to show / hide nav
		headerList.classList.toggle('show');

		// Prevent background scrolling when the menu is open
		if (document.body.style.overflowY) {
			document.body.style.overflowY = '';
		} else {
			document.body.style.overflowY = 'hidden';
		}

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
	};

	/**
	 * 3. Add / remove click event depending on media query breakpoints
	 * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
	 */
	const screenTest = e => {
		if (e.matches) {
			// the viewport is 991 pixels wide or less
			hamburger.addEventListener('click', toggleHam);
			headerList.addEventListener(function (e) {
				e.preventDefault();
				if (e.target.classList.contains('header__item')) toggleHam;
			});
		} else {
			// the viewport is 992 pixels wide or greater
			hamburger.removeEventListener('click', toggleHam);
			headerList.removeEventListener(function (e) {
				e.preventDefault();
				if (e.target.classList.contains('header__item')) toggleHam;
			});
		}
	};

	const smallScreen = window.matchMedia('(max-width: 991px)');
	screenTest(smallScreen);
	smallScreen.addEventListener('change', screenTest, false);
	// smallScreen.onchange = () => console.log(smallScreen);

	// 4. Smooth scroll
	const scrollSmoothly = () => {
		const links = document.querySelectorAll('.header__item a');

		links.forEach(link => {
			link.addEventListener('click', e => {
				e.preventDefault();
				const href = link.getAttribute('href');
				document.querySelector(href).scrollIntoView({
					behavior: 'smooth',
				});
			});
		});
	};

	scrollSmoothly();
};

enableResponsiveNav();
