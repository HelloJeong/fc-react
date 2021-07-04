# ![React](https://ko.reactjs.org/favicon.ico) [**React**](https://reactjs.org/ "React 공식 홈페이지")

_Fastcampus React 강의 내용을 정리해둔 자료입니다._

## Style Loaders

- project를 eject 시킨 후 진행(webpack 확인)

  - CSS, CSS module

    ```jsx
    import "./App.css";
    import styles from "./App.module.css";
    ```

  - SASS, SASS module

    ```jsx
    import "./App.scss";
    import "./App.sass";
    import styles from "./App.module.scss";
    import styles from "./App.module.sass";
    ```

- **CSS, SASS**
  - 네이밍 방법론 : BEM(Block Element Modifier, [참고](http://getbem.com/naming/))
