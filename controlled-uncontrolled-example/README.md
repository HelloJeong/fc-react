# ![React](https://ko.reactjs.org/favicon.ico) [**React**](https://reactjs.org/ "React 공식 홈페이지")

_Fastcampus React 강의 내용을 정리해둔 자료입니다._

## **Controlled Component 와 Uncontrolled Component**

- 상태를 가지고 있는 엘리먼트

  - input, select, textarea, ...

- '누가' 엘리먼트의 상태를 관리하냐에 따라서

  - Controlled Component(엘리먼트를 가지고 있는 컴포넌트가 관리([참조](https://ko.reactjs.org/docs/forms.html#controlled-components)))
  - UnControlled Component(엘리먼트의 참조만 컴포넌트가 소유)([참조](https://ko.reactjs.org/docs/uncontrolled-components.html))

    - react에서 querySelector같이 DOM에 직접적으로 접근 하는 것은 지양한다.
    - `React.createRef()`로 ref 걸기

  - 어떤 상황에 사용?
    - state가 변경되는 상황 마다 ui를 변경 시(ex. 이메일 형식에 안 맞으면 border 변경 등)
      - Controlled 방식이 더 알맞음
    - Element에 mouseEnter와 같은 이벤트를 걸어 줄 때
      - Uncontrolled 방식이 더 알맞음
