# Day02 - JS + CSS Clock

## 👽 TIL
### 1. CSS position
``` CSS
foo {
	position: static;
	position: relative;
	position: absolute;
}
```
- static: 위치 수정 불가. default
- relative: 위치 수정 가능. 기준은 static
- absolute: 위치 수정 가능. 기준은 부모 요소 중 처음으로 `position: static;`이지 않은 것.

### 2. SCSS @mixin
- 공통 속성을 모아서 정의할 수 있다.
- [링크](https://www.codingfactory.net/10110)


## 👽 Idea
- ✅ 기본 CSS 커스텀
- ✅ 시침/분침/초침이 끝에서 약간 겹쳐지게 만들기
- ✅ 낮/밤에 따라 배경 변화하기
- ✅ 1분이 지날 때마다 화면 깜박이기(transition이 안 예쁘게 되는 것을 감추기 위함)
- 배경 서서히 움직이는 효과

## 👽 Reference
- `./favicon.ico` : https://emojis.wiki/alarm-clock/
- `./assets/images/day.jpg` : https://wallpaperaccess.com/anime-sky-hd
- `./assets/images/night.jpg` : https://blog.naver.com/se___ovo/221857354443