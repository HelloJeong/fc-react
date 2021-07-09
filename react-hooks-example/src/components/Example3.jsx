import React, { useEffect, useState } from "react";

function Example3() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("componentDidMount & componentDidUpdate", count);
  // }); // 렌더 뒤에는 항상 실행

  useEffect(() => {
    console.log("componentDidMount");

    return () => {
      // cleanup
      // componentWillUnmount
    };
  }, []); // 최초 렌더에만 실행

  useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);

    return () => {
      // cleanup
      // next useEffect가 실행되기 전에 실행됨(이전 dependency)
      console.log("cleanup by count", count);
    };
  }, [count]);

  return (
    <div>
      <p>You Clicked {count}</p>
      <button onClick={click}>click</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}

export default Example3;
