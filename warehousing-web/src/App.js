import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./config/redux";
import Home from "./pages/Home/Home";
import { PrivateRoute } from "./helpers";
import Login from "./pages/Login";
import Product from "./pages/Product/Product";
import Category from "./pages/Category/Category";
import Shelves from "./pages/Shelves/Shelves";
import Inventory from "./pages/Inventory/Inventory";
import Account from "./pages/Account/Account";
import Report from "./pages/Report/Report";
import AddProduct from "./pages/Product/AddProduct";
import Add from "./pages/Account/Add";

export default function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/home" exact component={Home} />
          <PrivateRoute path="/product" exact component={Product} />
          <PrivateRoute path="/product/:pages" component={AddProduct} />
          <PrivateRoute path="/category" exact component={Category} />
          <PrivateRoute path="/shelves" exact component={Shelves} />
          <PrivateRoute path="/inventory" exact component={Inventory} />
          {/* <Route path="/account" exact component={Account} /> */}
          <PrivateRoute path="/account/:pages" component={Add} />
          <PrivateRoute path="/report" exact component={Report} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Provider>
  );
}
