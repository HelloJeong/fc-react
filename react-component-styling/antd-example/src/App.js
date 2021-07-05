import logo from "./logo.svg";
import "./App.css";
import { Calendar } from "antd";
import { GithubOutlined } from "@ant-design/icons";

function onPanelChange(value, mode) {
  console.log(value, mode);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <GithubOutlined />
        </p>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </header>
    </div>
  );
}

export default App;
