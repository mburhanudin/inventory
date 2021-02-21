import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/css/side-menu.css";
import "./assets/css/pages.css";
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
