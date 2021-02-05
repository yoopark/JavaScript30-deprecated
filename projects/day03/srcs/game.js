'use strict';

const inputs = document.querySelectorAll('input');

let minScale = 10.0;
let minBlur = 30;

function handleUpdate() {
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

	if (this.name === 'scale') {
		minScale = Math.min(minScale, this.value);
	} else if (this.name === 'blur') {
		minBlur = Math.min(minBlur, this.value);
	}
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
		document.getElementById("result").innerHTML = "✔️";
		document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + Math.round(parseFloat(minScale) * 5 + parseFloat(minBlur) * 10);
	} else {
		document.getElementById("result").innerHTML = "❌";
	}
}

function clickPassButton() {

}

const userAnswer = document.getElementById("answer");
userAnswer.addEventListener('click', () => {
	document.getElementById("result").innerHTML = "";
});