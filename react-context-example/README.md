# ![React](https://ko.reactjs.org/favicon.ico) [**React**](https://reactjs.org/ "React 공식 홈페이지")

_Fastcampus React 강의 내용을 정리해둔 자료입니다._

## Context API([참조](https://ko.reactjs.org/docs/context.html))

- 하위 컴포넌트 전체에 데이터를 공유하는 법
  - 데이터를 set하는 컴포넌트(가장 상위 컴포넌트 => 프로바이더)
    1. context 생성
    1. context.Provider 사용
    1. value 사용
  - 데이터를 get하는 컴포넌트(모든 하위 컴포넌트에서 접근 가능)
    - Consumer(범용적으로 사용)
      1. context를 가져온다
      1. context.Consumer 사용
      1. value 사용
    - class component: this.context
      1. static contextType에 context 설정
      1. this.context => value
      - 단점: 하나의 context만 가져와서 사용할 수 있음, 여러 개를 사용하려면 다른 컴포넌트를 이용해 props를 사용
    - functional component: useContext(가장 많이 사용)
      1. useContext로 context를 인자로 호출
      1. useContext의 리턴이 value
