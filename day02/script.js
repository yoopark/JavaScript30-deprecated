'use strict';

function changeBackground() {
	let day = new Date();
	x = day.getHours()
	const view = document.querySelector('html');
	
	if (6 <= x && x <= 18) {
		view.style.backgroundImage = 'url(https://i.pinimg.com/originals/d8/82/e1/d882e1419d173455364b85c3bc671738.jpg)';
	} else {
		view.style.backgroundImage = 'url(https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTdfNDYg/MDAxNTg0MzczNzk3ODQy.Ooucf2f_HpBxjTYmKvVzjsUFVf8u0f8znnZJvcexQ2cg.av6oDkX_30e8d8Ln3jMaR25p_1TW-LyUee9a56dflscg.JPEG.se___ovo/%EB%85%B8%ED%8A%B8%EB%B6%81%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B421.jpg?type=w800)';
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