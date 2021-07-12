# ![React](https://ko.reactjs.org/favicon.ico) [**React**](https://reactjs.org/ "React 공식 홈페이지")

_Fastcampus React 강의 내용을 정리해둔 자료입니다._

## React Advanced

- Optimizing Performance(필요할 때만 렌더한다.)
  - Reconciliation
    - 렌더 전후의 일치 여부를 판단하는 규칙
    - 서로 다른 타입의 두 엘리먼트는 서로 다른 트리를 만들어낸다.
    - 같은 타입의 엘리먼트는 어트리뷰트를 업데이트 시킨다.
    - 같은 타입의 컴포넌트는 마운트 언마운트가 아닌 업데이트 시킨다.
    - 개발자가 key prop을 통해, 여러 렌더링 사이에서 어떤 자식 엘리먼트가 변경되지 않아야 할 지 표시해 줄 수 있다.
      - key prop => 1, 2, 3 같은 것은 무의미하고 해당 컴포넌트의 식별자 성격을 띤 값을 하는 것이 좋음
- React.createPortal
- React.forwardRef
