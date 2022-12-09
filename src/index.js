import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { Navbar } from "./NavBar";
import { ShoppingCart } from "./ShoppingCart";
import "./index.css";
import App from "./App";
//import ShoppingCart from "./ShoppingCart";

var element = <button className="btn btn-danger">Hello World</button>;
ReactDOM.render(
  <React.Fragment>
    <Navbar />
    <ShoppingCart />
  </React.Fragment>,
  document.getElementById("root")
);
