'use strict';

function adaptCoordinates(event) {
	const pct = event.clientX / window.innerWidth;
	const wholeX = document.body.clientWidth - window.innerWidth + 100; // 정확한 수식 필요
	window.scrollTo(wholeX * pct, 'smooth');
}

function changeProperty() {
	this.classList.add('clocking');
	const specials = document.querySelectorAll('.special:nth-of-type(n + 2), .end');
	specials.forEach(special => special.setAttribute("style", "position: static;"));
}

const end = document.querySelector('.end');
end.addEventListener('click', changeProperty);