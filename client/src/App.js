import React, { useEffect, createContext, useReducer, useContext } from "react";
import NavBar from "./component/navbar";
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Home from "./component/screens/Home";
import Signin from "./component/screens/Signin";
import Profile from "./component/screens/Profile";
import Signup from "./component/screens/Signup";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </BrowserRouter>
  );
}

export default App;
