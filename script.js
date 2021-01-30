'use strict';

function adaptCoordinates(event) {
	const pct = event.clientX / window.innerWidth;
	window.scrollTo(event.pageX * pct, event.clientY, 'smooth');
}

function changeProperty() {
	this.classList.add('clocking');
	const specials = document.querySelectorAll('.special:nth-of-type(n + 2), .end');
	specials.forEach(special => special.setAttribute("style", "position: static;"));
}

const end = document.querySelector('.end');
end.addEventListener('click', changeProperty);