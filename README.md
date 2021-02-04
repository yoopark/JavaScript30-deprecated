# JavaScript30
![JavaScript30 Main Image](https://camo.githubusercontent.com/07ca65497065dd926bd889c53b7b7652f8ef3cbc4320739cf7ebed3c4d34cb2d/68747470733a2f2f6a61766173637269707433302e636f6d2f696d616765732f4a53332d736f6369616c2d73686172652e706e67)

~~원래는 30일만에 끝내는 것이 목표지만 실패~~

30개의 예제로 HTML+CSS+JS를 제대로 학습하자!

---

## 🤦‍♂️ [당신의 클론 코딩은 왜 실패하는가?](https://geonlee.tistory.com/171)

JavaScript30 강의는 기초적이면서도 길이가 짧지만, 굉장히 다양한 정보가 컴팩트하게 전달된다는 점에서 난이도가 아주 낮다고는 할 수 없다. 

그것을 간과하고 여느 날처럼 클론코딩을 하고 있던 중, 기억도 잘 못하고 유기적으로 이해도 잘 하지 못하고 있는 나를 발견하였다. 

위 링크에 따르면, 클론 코딩이 성공하기 위해서는 다음의 규칙을 따라야 한다.
- Github에 Public Repo로 올리자.
  - README를 열심히 꾸미자.
  - Commit을 꾸준히 하자.
  - Repo 각 폴더에 README를 통해 TIL을 기록하자.
- 반드시 제대로 이해하고 넘어가자.
  - 모르면 구글링하고, 찾은 내용을 기록하자.
  - 시험 환경에서 처음부터 만들 수 있어야 진정한 이해!
- 나만의 색을 입히자. 
  - 강의자의 코드와 100% 일치하는 건 재미없다.
  - 작은 HTML, CSS 부터 새로운 기능, 기술스택까지!

---

## 🎈 Coding Convention

### 1. 폴더 구조(**볼드체**는 필수)
- **index.html**
- **favicon.ico**
- **README.md**
- assets
  - images
  - sounds
- srcs
  - **styles.scss** -> styles.css.map & styles.css
  - **script.js**

### 2. CSS Property 우선순위
1. **display**
2. overflow
3. float
4. **position**
5. **width/height**
6. **padding/margin**
7. border
8. **background**
9. **color/font**
10. animation
11. etc.

출처 : [NHN Coding Convention for HTML/CSS](https://nuli.navercorp.com/data/convention/NHN_Coding_Conventions_for_Markup_Languages.pdf)