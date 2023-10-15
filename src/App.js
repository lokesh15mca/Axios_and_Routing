import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import { PrintData } from "./Components/PrintData";
import { User } from "./Components/User";
import { Home } from "./Components/Home";
import { Route, Link, Switch } from "react-router-dom";
import { UserDetails } from "./Components/UserDetails";
import { About } from "./Components/About";
import { Login } from "./Components/Login";
export default function App() {
  return (
    <div className="App">
      <h1>Hello Axios</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/User">User</Link>
        <Link to="/About">About</Link>
        <Link to="/Login">Login</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/User">
          <User />
        </Route>
        <Route path="/Users/:id">
          <UserDetails />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route>404 Page Not Found</Route>
      </Switch>
    </div>
  );
}
