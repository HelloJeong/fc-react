# ![React](https://ko.reactjs.org/favicon.ico) [**React**](https://reactjs.org/ "React 공식 홈페이지")

_Fastcampus React 강의 내용을 정리해둔 자료입니다._

## Styled Components

```bash
npm i styled-componens
```

```jsx
import styled from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;
`;

export default StyledButton;
```

- 이미 만들어진 styled-component를 그대로 가져와서 쓰고 싶을 때

```jsx
const PrimaryStyledButton = styled(StyledButton)`
  background: palevioletred;
  color: white;
`;
```

- 스타일이 적용된 styled-component를 다른 태그로 사용하고 싶을 때 as를 사용

```jsx
<StyledButton as="a" href="/">
  Button
</StyledButton>
```

- 전역적으로 css를 주고 싶을 때

```jsx
const GlobalStyle = createGlobalStyle`
  button {
    color: yellow;
  }
`;

...
<div className="App">
  <GlobalStyle />
  ...
</div>
```

- styled.ele.attrs 를 사용하면 default attr을 지정해줄 수 있음

```jsx
const StyledA = styled.a.attrs((props) => ({
  target: "_blank",
}))`
  color: ${(props) => props.color};
`;
```
