import React, { useState } from "react";

// function A() {
//   const [value, setValue] = useState("아직 안바뀜");
//   return (
//     <div>
//       <B value={value} />
//       <button onClick={click}>E 값 바꾸기</button>
//     </div>
//   );
//   function click() {
//     setValue("E의 값을 변경");
//   }
// }

// function B({ value }) {
//   return (
//     <div>
//       여긴 B
//       <C value={value} />
//     </div>
//   );
// }

// function C({ value }) {
//   return (
//     <div>
//       여긴 C
//       <D value={value} />
//     </div>
//   );
// }

// function D({ value }) {
//   return (
//     <div>
//       여긴 D
//       <E value={value} />
//     </div>
//   );
// }

// function E({ value }) {
//   return (
//     <div>
//       여긴 E <h3>{value}</h3>
//     </div>
//   );
// }

// export default A;

function A() {
  const [value, setValue] = useState("아직 안바뀜");

  return (
    <div>
      <p>{value}</p>
      <B setValue={setValue} />
    </div>
  );
}
function B({ setValue }) {
  return (
    <div>
      <p>여긴 B</p>
      <C setValue={setValue} />
    </div>
  );
}

function C({ setValue }) {
  return (
    <div>
      <p>여긴 C</p>
      <D setValue={setValue} />
    </div>
  );
}

function D({ setValue }) {
  return (
    <div>
      <p>여긴 D</p>
      <E setValue={setValue} />
    </div>
  );
}

function E({ setValue }) {
  return (
    <div>
      <p>여긴 E</p>
      <button onClick={click}>클릭</button>
    </div>
  );
  function click() {
    setValue("바뀜");
  }
}
export default A;
