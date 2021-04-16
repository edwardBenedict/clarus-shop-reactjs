import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Products from "../components/products/Products";
import Login from "../components/login/Login";

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
      <Route path="/login/" component={Login} />
      <Route exact path="/">
        <Products
        // products={products} addProduct={addProduct}
        />
      </Route>
    </Switch>
  </div>
);

export default AppRouter;
