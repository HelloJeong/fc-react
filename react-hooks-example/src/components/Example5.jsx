import React, { useCallback, useMemo, useState } from "react";

function sum(persons) {
  console.log("sum...");
  return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}

function Example5() {
  const [value, setValue] = useState("");
  const [persons] = useState([
    {
      name: "jeong",
      age: 20,
    },
    {
      name: "kim",
      age: 25,
    },
  ]);
  // const count = sum(persons); // persons가 변하지 않았는데도 계속 실행 됨
  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  const click = useCallback(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <input type="text" value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>click</button>
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}

export default Example5;
