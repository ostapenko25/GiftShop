var iconHambur = document.getElementById('hamburger');
var navHambur = document.getElementById('nav-hamb');

iconHambur.addEventListener('click', funcShow); 

function funcShow() {
	//hambur.style.backgroundColor = 'black';	
	navHambur.classList.toggle('hamburger-open');
	iconHambur.classList.toggle('is-active');
}