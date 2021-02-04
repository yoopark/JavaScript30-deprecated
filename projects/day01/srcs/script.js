'use strict';

function changeBrightness(value) {
	const html = document.querySelector('html');
	html.style.filter = `brightness(${value})`;
}

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!audio)
		return ;
	key.classList.add('playing');
	changeBrightness('60%');
	audio.currentTime = 0; // 이걸 하지 않으면 이전에 누른 소리가 끝나기 전까지는 눌러도 소리를 무시한다.
	audio.play();
}

function removeTransition(e) {
	if (e.propertyName !== 'transform')
		return ;
	e.target.classList.remove('playing');
	/* 
	** foo.classList.add('bar');
	** foo.classList.remove('bar'); 
	*/
	changeBrightness('100%');
}

// const keys = Array.from(document.querySelectorAll('.key'));
/* Explanation
** querySelectorAll의 반환값인 NodeList로는 원래 forEach를 돌릴 수 없었기 때문에
** Array.from 을 활용하여 NodeList -> Array 변환이 필요했지만,
** 이제는 NodeList 클래스 안에도 ForEach가 추가되었기 때문에 그냥 사용이 가능하다.
*/

const keys = document.querySelectorAll('.key');

keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


const inputs = document.querySelectorAll('input');
const bgm = document.getElementById('bgm');
bgm.volume = 0.3;

function handleUpdate() {
	bgm.volume = this.value * 0.01;
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));