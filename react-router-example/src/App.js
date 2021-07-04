import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
import Login from "./components/Login";

const isLogin = false;

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Switch>
        <Route
          path="/login"
          render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
