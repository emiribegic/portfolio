const sections = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger');
const headerList = document.querySelector('.header__list');

// Dynamically generate nav list items from sections
sections.forEach(section => {
	const list = document.createElement('li');
	const anchor = document.createElement('a');
	list.classList.add('header__item');
	anchor.classList.add('link');
	anchor.setAttribute('href', `#${section.id}`);
	anchor.innerText = section.dataset.nav;
	list.appendChild(anchor);
	headerList.appendChild(list);
});

const headerItem = document.querySelectorAll('.header__item');

// Helper - 1
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

/*
 * Helper - 2
 * Add / remove click event depending on media query breakpoints
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
const screenTest = e => {
	if (e.matches) {
		// the viewport is 991 pixels wide or less
		hamburger.addEventListener('click', toggleHam);
		headerItem.forEach(item => {
			item.addEventListener('click', toggleHam);
		});
	} else {
		// the viewport is 992 pixels wide or greater
		hamburger.removeEventListener('click', toggleHam);
		headerItem.forEach(item =>
			item.removeEventListener('click', toggleHam)
		);
	}
};

// Enable 🍔 menu when the viewport <= 991px
const enableBurgerMenu = () => {
	const smallScreen = window.matchMedia('(max-width: 991px)');
	screenTest(smallScreen);
	smallScreen.addEventListener('change', screenTest, false);
	// smallScreen.onchange = () => console.log(smallScreen);
};
enableBurgerMenu();

export { enableBurgerMenu };
