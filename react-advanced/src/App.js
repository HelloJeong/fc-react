import "./App.css";
import React from "react";

class Foo extends React.Component {
  componentDidMount() {
    console.log("Foo didMount");
  }
  componentWillUnmount() {
    console.log("Foo UnMount");
  }
  static getDerivedStateFromProps(nextProps, prevProps) {
    console.log("Foo getDerivedStateFromProps", nextProps, prevProps);
    return {};
  }
  render() {
    console.log("Foo render");
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
    if (this.state.count % 2 === 0) {
      // return <div className="before" title="stuff" />;
      // return <div style={{ color: "red", fontWeight: "bold" }} />;
      return <Foo name="Jeong" />;
    } else {
      // return <div className="after" title="stuff" />;
      // return <div style={{ color: "green", fontWeight: "bold" }} />;
      return <Foo name="Kim" />;
    }
  }
}

export default App;
