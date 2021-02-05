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