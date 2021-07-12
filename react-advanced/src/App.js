import "./App.css";
import React from "react";

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

class App extends React.Component {
  state = {
    count: 0,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    // 렌더 전후의 일치 여부를 판단
    // if (this.state.count % 2 === 0) {
    //   return (
    //     <div>
    //       <Foo />
    //     </div>
    //   );
    // } else {
    //   return (
    //     <span>
    //       <Foo />
    //     </span>
    //   );
    // }
    // if (this.state.count % 2 === 0) {
    //   // return <div className="before" title="stuff" />;
    //   // return <div style={{ color: "red", fontWeight: "bold" }} />;
    //   return <Foo name="Jeong" />; // 컴포넌트가 mount->unmount가 되는게 아니고 update됨
    // } else {
    //   // return <div className="after" title="stuff" />;
    //   // return <div style={{ color: "green", fontWeight: "bold" }} />;
    //   return <Foo name="Kim" />;
    // }
    if (this.state.count % 2 === 0) {
      return (
        <ul>
          <Foo key="2">second</Foo>
          <Foo key="3">third</Foo>
        </ul>
      );
    } else {
      return (
        <ul>
          <Foo key="1">first</Foo>
          <Foo key="2">second</Foo>
          <Foo key="3">third</Foo>
        </ul>
      );
    }
  }
}

export default App;
