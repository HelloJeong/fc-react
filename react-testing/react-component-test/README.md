# ![React](https://ko.reactjs.org/favicon.ico) [**React**](https://reactjs.org/ "React 공식 홈페이지")

_Fastcampus React 강의 내용을 정리해둔 자료입니다._

## React Testing

- **@testing-library/react**

  - button component testing
    - 컴포넌트가 정상적으로 생성된다.
    - "button"이라고 쓰여있는 엘리먼트는 HTMLButtonElement이다.
    - 버튼을 클릭하면, p 태그 안에 "버튼이 방금 눌렸다."라고 쓰여진다.
    - 버튼을 클릭하기 전에는, p 태그 안에 "버튼이 눌리지 않았다."라고 쓰여진다.
    - 버튼을 클릭하고 5초 뒤에는, p 태그 안에 "버튼이 눌리지 않았다."라고 쓰여진다.
      - act([참조](https://ko.reactjs.org/docs/test-utils.html#act))
    - 버튼을 클릭하면, 5초 동안 버튼이 비활성화 된다.

- **jest-dom([참조](https://github.com/testing-library/jest-dom))**

  - toBe~

- user-event([참조](https://testing-library.com/docs/ecosystem-user-event/))
  - 유저가 이벤트를 사용할 때 등
