import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { Navbar } from "./NavBar";
import { ShoppingCart } from "./ShoppingCart";
import { Dashboard } from "./Dashboard";
import CustomersList from "./CustomersList";
import Login from "./Login";
import NotFound from "./NotFoundPage";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route, Routes } from "react-router";
import "./index.css";
import App from "./App";

//import ShoppingCart from "./ShoppingCart";

var element = <button className="btn btn-danger">Hello World</button>;
ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes path="/customers" exact component={CustomersList} />
    <Routes path="/shoppingcart" exact component={ShoppingCart} />
    <Routes path="/dashboard" exact component={Dashboard} />
    <Routes path="/" exact component={Login} />
    <Routes path="*" component={NotFound} />
    <ShoppingCart />
    <Dashboard />
    <Dashboard />
  </BrowserRouter>,
  document.getElementById("root")
);
