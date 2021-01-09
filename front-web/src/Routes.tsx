import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Home from "./Home/Index";
import Navbar from "./Navibar";
import Orders from "./Orders/Orders";

const Routes = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
