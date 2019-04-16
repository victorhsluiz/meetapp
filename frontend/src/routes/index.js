import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch } from "react-router-dom";

import history from "./history";

import Guest from "./guest";
import Private from "./private";

import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";
import Dashboard from "../pages/Dashboard";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signup" component={SignUp} />
      <Private exact path="/" component={Dashboard} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
