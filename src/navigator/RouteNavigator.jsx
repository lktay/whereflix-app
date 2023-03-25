import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About/About.js";
import Search from "../pages/Search/Search.js";
import Watchlist from "../pages/Watchlist/Watchlist.js";
import App from "../App";

const RouteNavigator = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<App />}
      />
      <Route
        path="/search"
        element={<Search />}
      />
      <Route
        path="/watchlist"
        element={<Watchlist />}
      />
      <Route
        path="/about"
        element={<About />}
      />
    </Routes>
  );
};

export default RouteNavigator;
