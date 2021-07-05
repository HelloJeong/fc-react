# ![React](https://ko.reactjs.org/favicon.ico) [**React**](https://reactjs.org/ "React 공식 홈페이지")

_Fastcampus React 강의 내용을 정리해둔 자료입니다._

## React Router([참고](https://reactrouter.com/))

```bash
npm i react-router-dom
```

- **react-router-dom**

  - 브라우저에서 요청한 경로에 Route의 path가 들어있다면 해당 component를 보여줌
  - **exact 옵션으로 정확한 경로일 때만 보여주게 할 수 있음**

    ```jsx
    <BrowserRouter>
      <Route path="/" component={Home} exact />
      <Route path="/profile" component={Profile} />
      <Route path="/about" component={About} />
    </BrowserRouter>
    ```

- **Dynamic Routing**

  - `parameters`: props.match.params

    ```jsx
      <Route path="/profile" exact component={Profile} />
      <Route path="/profile/:id" component={Profile} />
    ```

  - `querystring`: props.location.search

    - URLSearchParams([mdn](https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams))

      - 브라우저 내장 객체라 브라우저가 지원하지 않을 수도 있음

        ```jsx
        export default function About(props) {
          const searchParams = props.location.search;
          console.log(searchParams);
          const obj = new URLSearchParams(searchParams);
          console.log(obj.get("name"));
          return <div>About 페이지</div>;
        }
        ```

    - query-string

      ```bash
      npm i query-string
      ```

      ```jsx
      import queryString from "query-string";

      export default function About(props) {
        const searchParams = props.location.search;
        console.log(searchParams);
        const query = queryString.parse(searchParams);
        console.log(query);
        return <div>About 페이지</div>;
      }
      ```

- **Switch와 NotFound**

  - 여러 Route 중 순서대로 먼저 맞는 하나만 보여줌
  - exact를 뺄 수 있는 로직을 만들 수 있음
  - 마지막에 어디 path에도 맞지 않으면 보여줄 NotFound 페이지를 만들 수 있음

  ```jsx
  function App() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/profile/:id" component={Profile} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} /> // exact 빼면 notfound도 들어가게 됨
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
  ```

- **JSX 링크로 라우팅 이동하기**

  - a 태그를 사용하면 SPA에 어긋나게 됨
  - `react-router-dom`이 `Link` 컴포넌트를 지원

    ```jsx
    <Link to="/">Home</Link>
    ```

  - `react-router-dom`이 `NavLink` 컴포넌트를 지원
    - activeClassName, activeStyle처럼 active 상태에 대한 스타일 지정이 가능
    - Route의 path처럼 동작하기 때문에 exact가 있음

- **js로 라우팅 이동하기**

  - 하위 컴포넌트에게 props를 넘겨주는 형식(지양할 것)
  - react-router-dom은 두 가지의 해결법(hoc, hook)을 제공
    - `withRouter`: 컴포넌트 함수를 인자로 넣어서 export

- **Redirect**
