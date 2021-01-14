export const example = () => {
	document.addEventListener('click', function (e) {
		e.preventDefault();
		console.log('Somebody just clicked me!');
	});
};
example();
