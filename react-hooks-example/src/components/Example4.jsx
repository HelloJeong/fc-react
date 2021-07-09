import React, { useReducer } from "react";

// reducer => state를 변경하는 로직이 담겨있는 함수
// (prevState, action)
const reducer = (state, action) => {
  if (action.type === "PLUS") {
    return {
      count: state.count + 1,
    };
  }
  return state;
};

// dispatch => action 객체를 넣어서 실행
// action => 객체이고 필수 프로퍼티로 type을 가짐

export default function Example4() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>You Clicked {state.count}</p>
      <button onClick={click}>click</button>
    </div>
  );

  function click() {
    dispatch({ type: "PLUS" });
  }
}
