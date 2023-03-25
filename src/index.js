import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
// import Logo from "./components/logo/logo";
import Navbar from "./components/Navbar/Navbar";
import RouteNavigator from "./navigator/RouteNavigator";

import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.AUTH_DOMAIN;
const id = process.env.AUTH_CLIENTID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={id}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Router>
      {/* <Logo /> */}
      <Navbar />
      <RouteNavigator />
    </Router>
  </Auth0Provider>
);
