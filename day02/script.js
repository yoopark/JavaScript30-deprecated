'use strict';

function changeBackground() {
	const now = new Date();
	const hour = now.getHours()
	const view = document.querySelector('html');
	
	if (6 <= hour && hour <= 18) {
		view.style.backgroundImage = `url("./images/day.jpg")`;
	} else {
		view.style.backgroundImage = `url("./images/night.jpg")`;
	}
}

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();
	
	const second = now.getSeconds();
	const secondDegrees = (second / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;
	
	const min = now.getMinutes();
	const minDegrees = (min / 60) * 360 + 90;
	minHand.style.transform = `rotate(${minDegrees}deg)`;
	
	const hour = now.getHours();
	const hourDegrees = (hour / 12) * 360 + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(changeBackground, 1000);
setInterval(setDate, 1000);