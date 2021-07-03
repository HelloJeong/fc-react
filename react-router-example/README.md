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