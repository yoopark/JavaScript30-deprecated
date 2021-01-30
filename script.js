'use strict';

function adaptCoordinates(event) {
	var width = window.innerWidth;
	var x = event.clientX;
	var pct = (x / width);

	window.scrollTo(event.pageX * pct, event.pageY, 'smooth');
}

function changeProperty() {
	this.classList.add('clocking');
	const specials = document.querySelectorAll('.special:nth-of-type(n + 2), .end');
	specials.forEach(special => special.setAttribute("style", "position: static;"));
}

const end = document.querySelector('.end');
console.log(end);
end.addEventListener('click', changeProperty);