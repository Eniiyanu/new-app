import React, { Component } from "react";
import Navbar from "./NavBar";
import CustomersList from "./CustomersList";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NotFound from "./NotFoundPage";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <switch>
          <Navbar />
          <Route path="/customers" exact component={CustomersList} />
          <Route path="/shoppingcart" exact component={ShoppingCart} />
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="*" component={NotFound} />
          <Dashboard />
        </switch>
      </BrowserRouter>
    );
  }
}

//        <ShoppingCart />
