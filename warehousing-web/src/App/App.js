import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../config/redux';
import Home from '../Home/Home';
import { PrivateRoute } from '../helpers';
import Login from '../Login';
import Product from '../Product/Product';
import Category from '../Category/Category';
import Shelves from '../Shelves/Shelves';
import Inventory from '../Inventory/Inventory';
import Account from '../Account/Account';
import Report from '../Report/Report';
import AddProduct from '../Product/AddProduct';
import Add from '../Account/Add';

export default function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
          <Switch>
            <PrivateRoute path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/product" exact component={Product} />
            <Route path="/product/:pages" component={AddProduct} />
            <Route path="/category" exact component={Category} />
            <Route path="/shelves" exact component={Shelves} />
            <Route path="/inventory" exact component={Inventory} />
            {/* <Route path="/account" exact component={Account} /> */}
            <Route path="/account/:pages" component={Add} />
            <Route path="/report" exact component={Report} />
            <Route path="/login" component={Login} />
          </Switch>
      </div>
    </Provider>
  );
}