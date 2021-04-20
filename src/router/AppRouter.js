import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Products from "../components/products/Products";
import Login from "../components/login/Login";
import Checkout from "../components/basket/Basket";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={DefaultContainer} />
      </Switch>
    </BrowserRouter>
  );
};

const DefaultContainer = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Products} />
      <Route exact path="/login/" component={Login} />
      <Route exact path="/basket" component={Checkout} />
    </Switch>
  </div>
);

export default AppRouter;
