'use strict';

const html = document.querySelector('html');

function changeBackground() {
	const now = new Date();
	const hour = now.getHours();
	
	if (6 <= hour && hour <= 18) {
		html.style.backgroundImage = `url("./assets/images/day.jpg")`; // html 내부 태그로 넣기 때문에 index.html 기준 경로
	} else {
		html.style.backgroundImage = `url("./assets/images/night.jpg")`;
	}
}

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function flicker() {
	html.style.filter = 'brightness(30%)';
	setTimeout(() => {
		html.style.filter = 'brightness(100%)';
	}, 500);

}

function setDate() {
	const now = new Date();
	
	const second = now.getSeconds();
	const secondDegrees = (second / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;
	if (second == 0) {
		flicker();
	}
	
	const min = now.getMinutes();
	const minDegrees = (min / 60) * 360 + 90;
	minHand.style.transform = `rotate(${minDegrees}deg)`;
	
	const hour = now.getHours();
	const hourDegrees = (hour / 12) * 360 + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(changeBackground, 1000);
setInterval(setDate, 1000);