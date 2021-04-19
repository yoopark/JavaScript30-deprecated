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
let time = 60;
document.getElementById("score").innerHTML = score;
document.getElementById("time").innerHTML = time;

setInterval(() => {
	time -= 1;
	document.getElementById("time").innerHTML = time;
	if (time == 0) {
		location.href = "end.html";
	}
}, 1000);

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

const answer = document.getElementById("answer");
answer.addEventListener('click', () => {
	document.getElementById("answer").value = "";
	document.getElementById("result").innerHTML = "";
});