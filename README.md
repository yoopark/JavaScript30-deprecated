# JavaScript30
![JavaScript30 Main Image](https://camo.githubusercontent.com/07ca65497065dd926bd889c53b7b7652f8ef3cbc4320739cf7ebed3c4d34cb2d/68747470733a2f2f6a61766173637269707433302e636f6d2f696d616765732f4a53332d736f6369616c2d73686172652e706e67)

~~원래는 30일만에 끝내는 것이 목표지만 실패~~

30개의 예제로 HTML+CSS+JS를 제대로 학습하자!

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

## 🎈 Coding Convention

### 🥼 폴더 구조(**볼드체**는 필수)
- **index.html**
- **favicon.ico**
- **README.md**
- assets
  - images
  - sounds
- srcs
  - **styles.scss** -> styles.css.map & styles.css
  - **script.js**

### 🥼 [CSS Property 우선순위](https://nuli.navercorp.com/data/convention/NHN_Coding_Conventions_for_Markup_Languages.pdf)
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

### 🥼 Git Commit 메시지 올바르게 작성하기
1. [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- 오타 수정 -> `Fix typo in ~`
- 첫글자는 대문자로
  - Accelerate to 88 miles per hour
  - ~~accelerate to 88 miles per hour~~
- 되도록 a, an, the 사용하지 마
- 끝에 점 찍지 마
  - Open the pod bay doors
  - ~~Open the pod bay doors.~~
- If applied, this commit will <u>*your subject line here*</u>
  - '만약 이 커밋이 적용된다면, ~할 것입니다'로 더해서 읽었을 때 말이 되어야 함
  - 따라서 명령문 동사원형(부정 명령인 경우에는 Don't~)으로 시작해야 함

2. [좋은 git commit 메시지를 위한 영어 사전](https://blog.ull.im/engineering/2019/03/10/logs-on-git.html)
- Fix : 올바르지 않은 동작을 고쳤다
  - `Fix A`
  - `Fix A in B`
  - `Fix A which B`
  - `Fix A to B`
  - `Fix A so that B`
  - `Fix issue/error/crash where B` : 그 이슈를 마주치면 B같이 나와요
  - `Fix issue/error/crash when B` : 그 이슈는 B 상황일 때 나와요
- Add : 코드, 테스트, 예제, 문서 등을 추가했다
  - `Add A`
  - `Add A for B` : 목적
  - `Add A to B` : 위치
- Remove : 코드를 삭제했다
  - V + unnecessary/useless/unneeded ~
  - V + unused (variable)
  - V + duplicated ~
  - `Remove A`
  - `Remove A from B`
- Use : 새로운 기능이나 함수를 굳이 사용했습니다
  - `Use A`
  - `Use A for B` : 기능이 좋아진 대상
  - `Use A to B` : 목적
  - `Use A in B` : 위치
  - `Use A instead of B`
- Refactor : 전면 수정하였습니다
  - `Refactor A`
  - 약한 수정일 경우, `Simplify A`
- Update : 업데이트합니다(오작동을 고치는게 아님)
  - `Update A to 6.1.0`
  - `Update A to B` : 목적
- 기타
  - `Improve (performance)`
  - `Make A B`
  - `Implement A` : 이걸 제가 구현해냈습니다
  - `Implement A to B` : 목적
  - `Revise A` : 문서를 개정합니다
  - `Correct (grammatical error/return types)`
  - `Prevent A from B` : B하지 못하게 막습니다
  - `Avoid warning/event when B` : B인 상황에서 (오류)가 안 생기도록 예외 조건을 추가하였습니다
  - `Move A into B` : 코드를 이동하였습니다
  - `Rename A to B` : 이름을 변경하였습니다
  - `Verify A` : A를 검증하는 코드입니다
  - `Set A to B` : 자잘한 변수 값을 수정하였습니다

3. 커밋 메시지가 생각나지 않는 이유
- 하나의 일만을 한게 아니기 때문이다.
- 큰 프로젝트를 하는 경우, 한 호흡에 하나의 일만을 수행할 수밖에 없는게 당연하다. 
- 하지만 개인 프로젝트인 경우 보이는 족족 수정하려 드는 마인드가 있어서 커밋할 때에 고생이 찾아온다. 
- 따라서 **무슨 일을 할지 의식적으로 생각한 뒤 시작하고, 한 호흡이 아직 끝나지 않았더라도 그 일이 끝났다면 반드시 커밋한 뒤 넘어가는 연습을 하자.** 

## 드림코딩 엘리, [자바스크립트의 역사와 현재 그리고 미래(JavaScript, ECMAScript, JQuery, Babel, Node.js)](https://www.youtube.com/watch?v=wcsVjmHrUQg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=1)

1993년 UI가 더해진 최초의 웹 브라우저 MOSAIC을 시장에 내놓는다. **MOSAIC의 개발팀을 이끌던 Marc Andreessen이 Netscape를 설립한다. 1994년 MOSAIC을 발전시켜 Netscape Navigator를 시장에 내놓는다.** 간단한 HTML & CSS로 정적인 웹사이트를 만들 수 있었고,  80%의 시장 점유율을 차지한다. 

Marc Andreessen은 어떻게 하면 동적인 웹사이트를 만들 수 있을지 고민한다. *아하, 사용자가 직접 DOM 요소를 조작하도록 하는 Scripting 언어를 추가하자!* 후보는 다음과 같았다. 
1. Java -> 웹에서 사용하기에는 무겁고 어려워. 
2. Scheme -> Brendan Eich를 스카우트해서 Scheme script 언어를 변형하자. 
   1. Scheme을 유지하면서 문법은 Java스럽게 만들어보자!
   2. 우리는 시간이 없어... 10일 안에 만들어야 해.

1994년 9월, Brendan Eich는 Mocha라는 언어를 개발하였고, 이후 LiveScript로 명칭이 변경된다. 그리고 Netscape Navigator 안에는 LiveScript interpreter가 포함된다. **하지만 출시할 때는 당시 뜨던 Java의 인기에 편승하려고 LiveScript에서 JavaScript로 명칭을 변경한다.** ~~그러니까 Java와 JavaScript는 전혀 다른 언어다.~~

1995년 브라우저가 뜨는 걸 지켜본 Microsoft가 Netscape Navigator를 Reverse engineering<sup>[1](#footnote_1)</sup> 해서 JScript라는 이름으로 카피하고, 이것을 내장한 Internet Explorer를 시장에 내놓는다. ~~그러면 개발자는 두 브라우저 버전으로 다 개발해야 돼?~~ 

1996년 11월, 이 사태를 참지 못한 Netscape는 ECMA International에 찾아가 표준안을 만들어보자고 제안하였고, **1997년 7월 ECMAScript 1 language specification<sup>[2](#footnote_2)</sup>이 시장에 나오게 된다. **이후 나오는 개정판은 다음과 같다. 
1. ECMAScript 1(1997)
2. ECMAScript 2(1998)
3. ECMAScript 3(1999) : error handling, three equal operator(===)
4. ECMAScript 4(2000) : optional type annotation, class

2000년, Internet Explorer의 시장 점유율이 95%에 이른다.  오만해진 Microsoft는 class를 추가하는 것 등 ECMAScript 개정에 불만을 표하며, 어차피 Internet Explorer가 표준이 될 것이라고 선언하며 ECMAScript 표준안에 참여하지 않게 된다. ~~95%가 빠졌는데 ECMAScript 개정이 되겠어?~~

2004년 Mozilla에서 Firefox 브라우저를 만든다. 이후 ECMAScript International에 찾아가서 ActionScript3 언어와 Tamarin 엔진 중심으로 다시 표준안을 만들어보자고 건의하였으나, 기존 JScript, JavaScript와는 문법이 너무 달랐기 때문에 표준화가 쉽진 않았다. 그래서 **2004년에는 Microsoft(Internet Explorer; JScript), Netscape(Netscape Navigator; JavaScript), Mozilla(Firefox; ActionScript3)가 신경전을 벌였다.** ~~역시 죽어나가는 건 개발자들~~

2004년 Jesse James Garrett가 아주 획기적인 기술인 AJAX<sub>[3](#footnote_3)</sub>를 발표했음에도 불구하고 신경전은 이어졌다. 그러면서 Opera 등 더 다양한 브라우저가 출시되었는데, ~~역시 또 죽어나가는 건 개발자들~~ 이때 웹개발자 수요가 늘어나면서 커뮤니티도 생기고, **커뮤니티에서는 브라우저 여러 개를 다 신경쓰지 않아도 되도록 jQuery, dojo, mootools와 같은 라이브러리를 제작한다.** *우리 함수들(=API)만 쓴다면, 돌아가는 건 알아서 책임질게!* 

**2008년 Google에서 Chrome 브라우저를 출시한다.** Chrome에는 다른 브라우저에는 없는 JIT(Just-in-time Compliation) 기술이 포함되었기 때문에 JavaScript 실행 속도가 어마어마하게 빨랐고, 따라서 다른 브라우저들은 ~~자신의 파이가 빼앗길까봐 그제서야~~ 새로운 표준안 논의를 시작한다. 이후의 ECMAScript 개정판은 다음과 같다. 
1. ECMAScript 5(2009)
2. ECMAScript 6(2015) : default parameter(함수 parameter 안 들어왔을 때 초기값), class, arrow function(=>), const/let
3. ECMAScript 7(2016)
4. ECMAScript 8(2017)
5. ECMAScript 9(2018)
6. ECMAScript 10(2019)

이제는 모든 브라우저가 ECMAScript를 잘 준수하고 있기 때문에 jQuery, dojo, mootools와 같은 라이브러리를 사용할 필요가 없어졌다. 현재 각각의 브라우저에서 사용하는 JavaScript Engine은 다음과 같다. 
1. Chrome : V8 -> Node.js, Electron에서도 이용됨
2. Firefox : SpiderMonkey
3. Safari : JSCore
4. MS Edge : Chakra -> 2020.2에 V8으로 대체
5. Opera : Carakan
6. Adobe Flash : Tamarin

하지만 모든 브라우저 사용자가 최신 버전으로 사용하는 것은 아니기 때문에 개발자는 TypeScript 등으로 가장 최신 버전으로 개발한 뒤, 배포할 때만 Babel과 같은 JavaScript transcompiler를 이용하여 ECMAScript 5, 6으로 다운그레이드하는 방법을 많이 이용한다. 

요즘에는 SPA(Single Page Application)이 뜨고 있다. *데이터가 변경될 때마다 전체를 새로 띄우는게 아니라, 변경된 부분만 바꿔 끼우는게 더 효율적이다!* SPA를 쉽게 만들기 위해 사용되는게 React, Angular, Vue, Backbone 등의 라이브러리, 프레임워크다. 

표준화가 잘 되고 JavaScript Engine이 강력해지면서 Node.js를 통해 back-end를, Reactive Native를 통해 모바일 어플리케이션을, Electron을 통해 데스크탑 어플리케이션을 만들 수 있게 되었다. 

원래 브라우저에서 동작하는 언어는 JavaScript가 유일했으나, 최근에는 Web Assembly가 등장하면서 Rust, C, C++, C#, Python, Java, Go 등 다양한 언어를 이용하여 웹 어플리케이션을 만드는 것이 가능해졌다. 


[각주]
1. <a name="footnote_1">Binary code로 Source code를 복원해내는 작업</a>
2. <a name="footnote_2">브라우저에 내장되는 엔진이 갖춰야 하는 변수, 함수 등 문법이 규정되어 있음</a>
3. <a name="footnote_3">Asynchronous JavaScript and XML. 비동기적으로 서버에서 데이터를 받고 처리할 수 있게 되었다</a>