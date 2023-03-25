import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const goTo = (id) => {
    if (id === "home") {
      navigate("/");
    }
    if (id === "about") {
      navigate("/about");
    }
    if (id === "watchlist") {
      navigate("/watchlist");
    }
    if (id === "search") {
      navigate("/search");
    }
  };

  return (
    <div className="navbar">
      <button
        id="home"
        onClick={(e) => goTo(e.target.id)}
      >
        Home
      </button>
      <button
        id="search"
        onClick={(e) => goTo(e.target.id)}
      >
        Search
      </button>
      <button
        id="watchlist"
        onClick={(e) => goTo(e.target.id)}
      >
        Watch List
      </button>
      <button
        id="about"
        onClick={(e) => goTo(e.target.id)}
      >
        Links
      </button>
    </div>
  );
};

export default Navbar;
