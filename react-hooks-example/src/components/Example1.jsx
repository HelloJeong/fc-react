import React, { useState } from "react";

function Example1() {
  const [count, setCount] = useState(0);

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

export default Example1;
