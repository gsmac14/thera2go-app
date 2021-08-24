import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;
