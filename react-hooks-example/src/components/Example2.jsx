import React, { useState } from "react";

function Example2() {
  const [state, setState] = useState({ count: 0 });

  return (
    <div>
      <p>You Clicked {state.count}</p>
      <button onClick={click}>click</button>
    </div>
  );

  function click() {
    // setState({ count: state.count + 1 });
    setState((state) => ({ count: state.count + 1 }));
  }
}

export default Example2;
