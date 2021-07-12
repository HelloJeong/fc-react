# ![React](https://ko.reactjs.org/favicon.ico) [**React**](https://reactjs.org/ "React 공식 홈페이지")

_Fastcampus React 강의 내용을 정리해둔 자료입니다._

## React

- 핵심 모듈([react-dom](https://ko.reactjs.org/docs/react-dom.html) / [react-api](https://ko.reactjs.org/docs/react-api.html))

  ```js
  import ReactDOM from "react-dom"; // react component -> HTMLElement 연결
  import React from "react"; // react component 만들기
  ```

- CDN을 통한 사용도 가능([CDN](https://ko.reactjs.org/docs/cdn-links.html))

- React.createElement

  ```js
  React.createElement(
    type, // 태그 이름 문자열 | 리액트 컴포넌트 | React.fragment
    [props], // 리액트 컴포넌트에 넣어주는 데이터 객체
    [...children] // 자식으로 넣어주는 요소들
  );
  ```

  - 태그 이름 문자열 type

    ```js
    // <h1>type이 "태그 이름 문자열"</h1>
    ReactDOM.render(React.createElement("h1", null, `type이 "태그 이름 문자열"`), document.querySelector("#root"));
    ```

  - 리액트 컴포넌트 type

    ```js
    const Component = () => {
      return React.createElement("p", null, `type이 "React 컴포넌트"`);
    };

    // <Component /> => <p>type이 "React 컴포넌트"</p>
    ReactDOM.render(React.createElement(Component, null, null), document.querySelector("#root"));
    ```

  - React.Fragment

    ```js
    ReactDOM.render(
      React.createElement(React.Fragment, null, `type이 "React.Fragment"`),
      document.querySelector("#root")
    );
    ```

  - 복잡한 리액트 엘리먼트 모임(React.createElement의 한계)

    ```js
    // <div><div><h1>주제</h1><ul><li>React</li></ul></div></div>
    ReactDOM.render(
      React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          React.createElement(
            ...
          )
        )
      ),
      document.querySelector("#root")
    );
    ```

  - [babel](https://babeljs.io)을 사용해서 jsx->js transfile 가능

- **jsx 문법**

  - `최상위 요소가 하나`여야 한다.
  - 자식들을 렌더링하고 싶으면 `<>자식들</>` => Fragment
  - js 표현식을 사용하려면 `{표현식}`
  - if문 사용 불가(`삼항 연산자 혹은 &&를 사용`)
  - style을 이용해 인라인 스타일링이 가능
  - html 속성 class 대신 className을 사용
  - 태그는 반드시 닫혀야한다.

- **_Props_**

  - 컴포넌트 외부에서 컴포넌트에게 주는 데이터

  ```jsx
  /*
  function Component(props) {
    return (
      <div>
        <h1>{props.message}</h1>
      </div>
    );
  }
  */

  class Component extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.message}</h1>
        </div>
      );
    }
    static defaultProps = {
      message: "기본값",
    };
  }

  /*
  Component.defaultProps = {
    message: "기본값",
  }
  */

  ReactDOM.render(<Component message="안녕" />, document.querySelector("#root"));
  ```

- **_State_**

  - 컴포넌트 내부에서 변경할 수 있는 데이터

  ```jsx
  class Component extends React.Component {
    /*
    state = {
      count: 0,
    };
    */

    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    render() {
      return (
        <div>
          <h1>{this.props.message}</h1>
          <p>{this.state.count}</p>
        </div>
      );
    }

    componentDidMount() {
      setTimeout(() => {
        // this.setState({ count: this.state.count + 1 });

        this.setState((previousState) => {
          const newState = { count: previousState.count + 1 };
          return newState;
        });
      }, 1000);
    }

    static defaultProps = {
      message: "기본값",
    };
  }
  ```

- **Event Handling**

  ```jsx
  class Component extends React.Component {
    state = {
      count: 0,
    };

    constructor(props) {
      super(props);
      this.click = this.click.bind(this); // click()에서 this를 인식하게끔 bind 해주거나 arrow function으로 정의
    }

    render() {
      return (
        <div>
          <p>{this.state.count}</p>
          <button onCLick={this.click}>click</button>
        </div>
      );
    }

    click() = () => {
      this.setState((state) => ({ ...state, count: state.count + 1 }));
    }
  }
  ```

- **_Component Lifecycle_**

  - v16.3 이전

    - Component 생성 및 마운트

      1. constructor
      1. componentWillMount
      1. **render(최초)**
      1. componentDidMount

    - Component props, state 변경

      1. componentWillReceiveProps(nextProps)
         - props를 새로 지정했을 때 바로 호출
         - state의 변경에는 반응하지 않음
           - 변경에 반응해야한다면 setState를 이용해 state를 변경
      1. shouldComponentUpdate(nextProps, nextState): boolean
         - true면 render, false면 render되지 않음, default return은 true
      1. componentWillUpdate(nextProps, nextState)
         - rerender되기 직전에 불리게되고 setState 같은 것은 쓰면 안됨
      1. **render**
      1. componentDidUpdate(prevProps, prevState)

    - Component 언마운트
      1. componentWillUnmount

  - v16.3 이후

    - Component 생성 및 마운트

      1. constructor
      1. <s>componentWillMount</s> -> static getDerivedStateFromProps(nextProps, prevState)
         - render 전에는 무조건 실행된다고 생각하면 된다.
         - return에는 새로운 state
      1. **render(최초)**
      1. componentDidMount

    - Component props, state 변경

      1. <s>componentWillReceiveProps</s> -> getDerivedStateFromProps
      1. shouldComponentUpdate(nextProps, nextState): boolean
      1. **render**
      1. <s>componentWillUpdate</s> -> getSnapshotBeforeUpdate(prevProps, prevState)
         - null을 리턴하면 변화가 없다고 생각하면 됨
         - infinite scroll 같은 경우에 유용
      1. (DOM에 적용)
      1. componentDidUpdate(prevProps, prevState, snapshot)

    - Component 언마운트

      1. componentWillUnmount

    - Component 에러 캐치([Error Boundaries](https://reactjs.org/docs/error-boundaries.html))

      1. componentDidCatch(error, info)

- **CRA(Create React App)**

  - `npm start`
    - Starting the development server.
  - `npm run build`
    - Creating an optimized production build.
    - `npx surve -s build`
  - `npm test`
    - Jest를 통해 test code 실행
  - `npm run eject`

    - CRA 내에서 해결이 안되는 설정을 추가해야 할 때 사용하며, 돌이킬 수 없음.

  - `ESLint`: package.json 파일 내의 `"eslintConfig"`
  - `Prettier`: An **_opinionated_** code formatter(주관을 가지고 의도적으로 코드를 수정)

  - **Husky**

    - commit이 되기 전에 코드를 점검 및 수정

    ```bash
    git init
    npm i husky -D
    npx husky install
    ```

    package.json

    ```json
    "scripts": {
      "prepare": "husky install",
      ...
    }
    ```

    commit 전에 `npm test`를 실행하고 오류 나면 commit을 중지

    ```bash
    npx husky add .husky/pre-commit "npm test"
    git add .
    git commit -m "~"
    ```

  - `lint-staged`
    - Run linters on git staged files(stage에 올린 파일들을 lint)

- **React Developer Tools**

## 리액트 실전 활용

- **HOC(Higher-Order Components([참조](https://ko.reactjs.org/docs/higher-order-components.html))**
  - 컴포넌트를 인자로 받아 새로운 컴포넌트를 리턴하는 함수
  - HOC 종류 : withRouter, connect(redux)
  - 주의점
    - Don't Use HOCs Inside the render Method
    - Static Methods Must Be Copied Over
    - Refs Aren't Passed Through(feat. React.forwardRef)
  - hoist-non-react-statics([참조](https://github.com/mridgway/hoist-non-react-statics))
- **Controlled Component 와 Uncontrolled Component([이동](https://github.com/HelloJeong/fc-react/tree/main/controlled-uncontrolled-example))**

## React Advanced

- Optimizing Performance(필요할 때만 렌더한다.)
  - Reconciliation
    - 렌더 전후의 일치 여부를 판단하는 규칙
    - 서로 다른 타입의 두 엘리먼트는 서로 다른 트리를 만들어낸다.
    - 개발자가 key prop을 통해, 여러 렌더링 사이에서 어떤 자식 엘리먼트가 변경되지 않아야 할 지 표시해 줄 수 있다.
- React.createPortal
- React.forwardRef

## Deploy React App
