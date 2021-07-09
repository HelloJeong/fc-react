# ![React](https://ko.reactjs.org/favicon.ico) [**React**](https://reactjs.org/ "React 공식 홈페이지")

_Fastcampus React 강의 내용을 정리해둔 자료입니다._

## React Testing

- **Unit Test**

  - 통합 테스트에 비해 빠르고 쉽다.
  - 통합 테스트를 진행하기 전 문제를 찾아낼 수 있다.(그렇다고 통합 테스트가 성공하리란 보장은 없음)
  - 테스트 코드가 동작을 설명하는 명세가 된다.
  - 선 코딩 후, (몰아서) 단위 테스트가 아니라 단위 테스트를 작성하고 코딩하는 방식(**TDD**, Test Driven Development)

- **Jest Framework([참조](https://jestjs.io/docs/expect))**

  - facebook/jest, open source
  - react의 영향이 크겠지만 가장 핫한 테스트 도구
  - easy Setup
  - Instant Feedback(고친 파일만 빠르게 테스트 다시 해주는 기능 등)
  - Snapshot Testing(컴포넌트 테스트에 중요한 역할을 하는 스냅샷)
  - watch mode: `npx jest --watchAll`
