'use strict';

const end = document.querySelector('.end');

function changeProperty() {
	this.classList.add('clocking');
	const specials = document.querySelectorAll('.special:nth-of-type(n + 2), .end');
	specials.forEach(special => special.setAttribute("style", "position: static;"));
}

end.addEventListener('click', changeProperty);