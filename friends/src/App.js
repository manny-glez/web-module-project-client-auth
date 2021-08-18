import './App.css';
import React from "react";
import { Route, Link, Switch} from "react-router-dom"

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Friends</h1>

        <nav>
          <Link to="/friends">Friends</Link>
          <Link to="/">Login</Link>
        </nav>
      </header>

      <Switch>

        <Route exact path="/">
          <Login />
        </Route>

        <PrivateRoute component={FriendsList} exact path="/friends"/>

      </Switch>
    </div>
  );
}

export default App;
