import React, { createContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import * as jwt from "jsonwebtoken";
import "../assets/css/reset.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./common/ProtectedRoute";

import Home from "./pages/home";

export const userContext = createContext();

const UserProvider = function (props) {
  const accessToken = localStorage.getItem("accessToken");

  const [isLogged, setIsLogged] = useState(accessToken !== null);
  const [userData, setUserData] = useState({});

  useEffect(
    function () {
      if (isLogged) {
        setUserData(jwt.decode(accessToken));
      }
    },
    [isLogged, accessToken]
  );

  return (
    <userContext.Provider value={{ login: [isLogged, setIsLogged], userData }}>
      {props.children}
    </userContext.Provider>
  );
};

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
