import React, { createRef, useRef, useState } from "react";

function Example6() {
  const [value, setValue] = useState("");
  const input1Ref = createRef();
  const input2Ref = useRef();

  console.log(input1Ref.current, input2Ref.current);
  return (
    <div>
      <input type="text" value={value} onChange={change} />
      <input type="text" ref={input1Ref} />
      <input type="text" ref={input2Ref} />
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}

export default Example6;
