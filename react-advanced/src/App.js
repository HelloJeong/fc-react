import "./App.css";
import React, { useCallback, useState } from "react";

class Foo extends React.Component {
  componentDidMount() {
    console.log("Foo didMount", this.props.children);
  }
  componentWillUnmount() {
    console.log("Foo UnMount", this.props.children);
  }
  static getDerivedStateFromProps(nextProps, prevProps) {
    console.log("Foo getDerivedStateFromProps", nextProps, prevProps);
    return {};
  }
  render() {
    console.log("Foo render", this.props.children);
    return <p>Foo</p>;
  }
}
// class Person extends React.PureComponent {
//   // React.Component를 상속받게 되면 아래처럼,
//   // shouldComponentUpdate(prevProps) {
//   //   for (const key in this.props) {
//   //     if (prevProps[key] !== this.props[key]) {
//   //       return true;
//   //     }
//   //   }
//   //   return false;
//   // }

//   render() {
//     console.log("Person render");
//     const { name, age } = this.props;
//     return (
//       <div>
//         {name} / {age}
//       </div>
//     );
//   }
// }

// pureComponent 같이 만듦
const Person = React.memo(({ name, age }) => {
  console.log("Person render");
  return (
    <div>
      {name} / {age}
    </div>
  );
});

// class App extends React.Component {
//   // state = {
//   //   count: 0,
//   // };
//   state = {
//     text: "",
//     persons: [
//       { id: 1, name: "jeong", age: 30 },
//       { id: 2, name: "kim", age: 20 },
//     ],
//   };
//   // componentDidMount() {
//   //   setInterval(() => {
//   //     this.setState({ count: this.state.count + 1 });
//   //   }, 1000);
//   // }

//   render() {
//     // 렌더 전후의 일치 여부를 판단
//     // if (this.state.count % 2 === 0) {
//     //   return (
//     //     <div>
//     //       <Foo />
//     //     </div>
//     //   );
//     // } else {
//     //   return (
//     //     <span>
//     //       <Foo />
//     //     </span>
//     //   );
//     // }
//     // if (this.state.count % 2 === 0) {
//     //   // return <div className="before" title="stuff" />;
//     //   // return <div style={{ color: "red", fontWeight: "bold" }} />;
//     //   return <Foo name="Jeong" />; // 컴포넌트가 mount->unmount가 되는게 아니고 update됨
//     // } else {
//     //   // return <div className="after" title="stuff" />;
//     //   // return <div style={{ color: "green", fontWeight: "bold" }} />;
//     //   return <Foo name="Kim" />;
//     // }
//     // key prop
//     // if (this.state.count % 2 === 0) {
//     //   return (
//     //     <ul>
//     //       <Foo key="2">second</Foo>
//     //       <Foo key="3">third</Foo>
//     //     </ul>
//     //   );
//     // } else {
//     //   return (
//     //     <ul>
//     //       <Foo key="1">first</Foo>
//     //       <Foo key="2">second</Foo>
//     //       <Foo key="3">third</Foo>
//     //     </ul>
//     //   );
//     // }

//     const { text, persons } = this.state;
//     return (
//       <div>
//         <input type="text" value={text} onChange={this._change} />
//         <ul>
//           {persons.map((person) => {
//             // return <Person {...person} key={person.id} />;
//             // return <Person {...person} key={person.id} onClick={() => {}} />; // input에 입력할 때마다 렌더
//             return <Person {...person} key={person.id} onClick={this.toPersonClick} />;
//           })}
//         </ul>
//       </div>
//     );
//   }

//   _change = (e) => this.setState({ ...this.state, text: e.target.value });
//   toPersonClick = () => {};
// }

function App() {
  const [state, setState] = useState({
    text: "",
    persons: [
      { id: 1, name: "jeong", age: 30 },
      { id: 2, name: "kim", age: 20 },
    ],
  });
  const { text, persons } = state;
  const toPersonClick = useCallback(() => {}, []);

  return (
    <div>
      <input type="text" value={text} onChange={change} />
      <ul>
        {persons.map((person) => {
          // return <Person {...person} key={person.id} />;
          // return <Person {...person} key={person.id} onClick={() => {}} />; // input에 입력할 때마다 렌더
          return <Person {...person} key={person.id} onClick={toPersonClick} />;
        })}
      </ul>
    </div>
  );
  function change(e) {
    setState({ ...state, text: e.target.value });
  }
}

export default App;
