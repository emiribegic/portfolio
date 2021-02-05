// Hamburger
const hamburger = document.querySelector('.hamburger');
const headerList = document.querySelector('.header__list');
const headerItem = document.querySelectorAll('.header__item');

export const enableBurgerMenu = () => {
	hamburger.addEventListener('click', () => {
		// Toggle classes to animate 🍔
		hamburger.classList.toggle('is-active');
		// Toggle classes to show / hide nav
		headerList.classList.toggle('show');

		////////// TODO /////////
		// Can i make it more DRY????

		// Prevent scrolling when the menu is open
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
	});
};

enableBurgerMenu();
