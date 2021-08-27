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
import Register from "./components/Register";

function App() {
  return (
    <Router>
        <Switch>
      <div>
          <Route exact path= "/login">
            <Login />
          </Route>
          <Route exact path= "/signup">
            <Register />
          </Route>
      </div>
        </Switch>
    </Router>
  );
}

export default App;
