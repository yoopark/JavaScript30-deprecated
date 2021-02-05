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

let score = 0;
document.getElementById("score").innerHTML = score;

function clickSubmitButton() {
	const userAnswer = document.getElementById("answer").value;
	if (userAnswer === "pikachu") {
		alert('정답입니다');
		const scale = getComputedStyle(document.documentElement).getPropertyValue('--scale');
		const blur = getComputedStyle(document.documentElement).getPropertyValue('--blur');
		document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + Math.round(parseFloat(scale) * 5 + parseFloat(blur) * 10);
	} else {
		alert('틀렸습니다');
	}
}

function clickPassButton() {

}