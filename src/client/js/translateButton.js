const aboutText = document.querySelector('.about-text');
const btnEng = document.querySelector('.btn-eng');
const btnGer = document.querySelector('.btn-ger');
const btnJap = document.querySelector('.btn-jap');

const translateToGerman = btnGer.addEventListener('click', function () {
	aboutText.innerHTML = `<p>
    <h3>Ich bin Emiri</h3>, a self-taught front-end developer in
    Germany.<br>
    I like to organize things and wondered if I could make my own To-Do app to make
    my
    life
    easier.
    Since then coding (especially JavaScript!) has triggered my curiosity and it was enough
    to
    motivate me to change my career into the tech industry.<br>
    My goal as front-end developer is to make modern
    web
    applications that make our lives a bit easier!
    </p>
    <p>Translate in:</p>`;
});

export { translateToGerman };
