import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Base from "components/Base";
import Home from "pages/Home";

import LoginError from "pages/LoginError";
import Login from "pages/Login";
import CreateUser from "pages/CreateUser";

const Routes = () => (
  <Router>
    <Base>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/create">
          <CreateUser />
        </Route>

        <Route path="/loginerror">
          <LoginError />
        </Route>
      </Switch>
    </Base>
  </Router>
);

export default Routes;
