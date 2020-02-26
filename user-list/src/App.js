import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import UserList from "./Components/UserList";
import User from "./Components/User";

function App() {
  return (
    <>
      <Router>
        <div className='App'>
          <nav>
            <Link to='/login'>Login ||</Link>
            <Link to='/protected'> Users List</Link>
          </nav>
          <Switch>
            <PrivateRoute exact path='/protected' component={UserList} />
            <Route path='/login' component={Login} />
            <Route component={Login} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
