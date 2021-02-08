// HAMBURGER
const sections = document.querySelectorAll('section');
const hamburger = document.querySelector('.hamburger');
const headerList = document.querySelector('.header__list');

// NAV
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

// HELPER FUNCTION
const toggleHam = () => {
	// Toggle classes to open / close 🍔
	hamburger.classList.toggle('is-active');
	// Toggle classes to show / hide nav
	headerList.classList.toggle('show');

	////////// TODO /////////
	// Can i make it more DRY????

	// Prevent scrolling when the menu is open (under 48rem)
	if (document.body.style.overflowY) {
		document.body.style.overflowY = '';
	} else {
		document.body.style.overflowY = 'hidden';
	}

	// Add animation to nav items
	// TODO instyleだからcssも塗り替えられる
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

// OPEN / CLOSE NAV
const bpLarge = window.matchMedia;
('(min-width: 992px)');

const enableBurgerMenu = () => {
	if (!bpLarge) {
		hamburger.addEventListener('click', toggleHam);
		headerItem.forEach(item => {
			item.addEventListener('click', toggleHam);
		});
	}
};

enableBurgerMenu();
