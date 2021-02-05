'use strict';

function adaptCoordinates(event) {
	const pct = event.clientX / window.innerWidth;
	const wholeX = document.body.clientWidth - window.innerWidth + 100; // 정확한 수식 필요
	window.scrollTo(wholeX * pct, 'smooth');
}

function changeProperty() {
	this.style.display = 'none';
	const allSpecial = document.querySelectorAll('.special');
	allSpecial.forEach(special => {
		special.style.display = 'block';
	});
}

const end = document.querySelector('.end');
end.addEventListener('click', changeProperty);