import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
// import Logo from "./components/logo/logo";
import Navbar from "./components/Navbar/Navbar";
import RouteNavigator from "./navigator/RouteNavigator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      {/* <Logo /> */}
      <Navbar />
      <RouteNavigator />
    </Router>
  </React.StrictMode>
);
