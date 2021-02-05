'use strict';

const inputs = document.querySelectorAll('input');

function handleUpdate() {
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

document.oncontextmenu = (e) => {
	alert('우클릭을 사용할 수 없습니다');
	return false;
};

document.ondragstart = (e) => {
	alert('드래그를 사용할 수 없습니다');
	return false;
};