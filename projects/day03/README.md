# Day03 - Playing with CSS Variables and JS

## 👽 TIL
### 1. CSS Variable
``` CSS
:root {
  --blur: 30px;
}

img {
  filter: blur(var(--blur));
}
```
``` JavaScript

function handleUpdate() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value + this.dataset.sizing);
}

const inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
```
``` HTML
<input id="blur" type="range" name="blur" min="0" max="30" value="30" data-sizing="px">
```

### 2. JS Variable을 HTML에 출력하는 법
- CSS Variable을 공부하니까 JS Variable도 전달할 수 있지 않을까 생각했다. 
- 하지만 JS는 전혀 어렵게 생각할 게 아니다. 
- `document.getElementByID("score").innerHTML = score;`의 방식으로 아주 쉽게 출력이 가능하다. 
- `innerHTML`에서는 정해진 문자열만 출력해야 한다는 고정관념을 깨자.

### 3. 우클릭 방지, 드래그 방지
```JavaScript
document.oncontextmenu = () => {
	alert('우클릭을 사용할 수 없습니다');
	return false;
};

document.ondragstart = () => {
	alert('드래그를 사용할 수 없습니다');
	return false;
};
```

## 👽 Idea
- ✅ 기본 CSS 커스텀
- ✅ input range 대상을 확대 & 블러로 바꾸기 
- ✅ 게임 시작(설명) 페이지 만들기
- ✅ 우클릭 & 드래그 기능 제한하여 이미지 보지 못하게 하기
- ✅ 확대 & 블러를 줄인 뒤 문제를 맞출 때 다시 올리는 버그 수정하기
- JSON을 통해 문제 경로와 답 받아오기
  - 문제+정답지 만들기
  - Pass 버튼 구현하기
- 60초 시간제한 추가하기
  - 시간 끝나면 이동할 결과 페이지 만들기
- Zoom 1x->2x는 급격한데 9x->10x의 변화는 미미한 문제. (bar step)

## 👽 Reference
- `./favicon.ico` : https://www.edweek.org/quizzes
- `./assets/images/pikachu.png` : https://blog.naver.com/retspe/220789825284