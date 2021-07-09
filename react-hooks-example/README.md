# ![React](https://ko.reactjs.org/favicon.ico) [**React**](https://reactjs.org/ "React 공식 홈페이지")

_Fastcampus React 강의 내용을 정리해둔 자료입니다._

## Hooks & Context

- **Basic Hooks([참조](https://ko.reactjs.org/docs/hooks-intro.html))**

  - useState, useEffect, useContext
  - useState(class의 state를 대체)
    - 나오게 된 배경
      - 컴포넌트 사이에서 상태와 관련된 로직을 재사용하기 어려움
        - 컨테이너 방식(props) 말고, 상태와 관련된 로직
      - 복잡한 컴포넌트들은 이해하기 어려움
      - class는 사람과 기계를 혼동시킴(컴파일 단계에서 코드 최적화를 어렵게 함)
      - **this.state는 로직에서 레퍼런스를 공유하기 때문에 문제가 발생 할 수 있음**
        - class는 render 사이에서 공유하고 function은 공유하지 않는다.
        - 좋은 부분 : render 사이에서 바뀐 state를 정확하게 표현해야 할 때
        - 좋지 않은 부분 : render 사이에 state를 reference 삼아서 사용할 때
  - useEffect(class의 LifeCycle을 대체)
    - componentDidMount
    - componentDidUpdate
    - componentWillUnmount
    - [참조](https://rinae.dev/posts/a-complete-guide-to-useeffect-ko)

- **Custom Hooks**
