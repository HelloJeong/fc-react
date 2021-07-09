import React, { createRef, useRef, useState } from "react";

function Example6() {
  const [value, setValue] = useState("");
  const input1Ref = createRef();
  const input2Ref = useRef();

  console.log(input1Ref.current, input2Ref.current);
  // createRef는 렌더 될 때마다 새로 레퍼런스를 생성
  // useRef는 계속 유지
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
