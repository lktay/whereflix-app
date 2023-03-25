import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <p className="about-text">
        Fullstack app for searching movie/tv show streaming availability - by
        Kevin Stobbs and Leoni Taylor.
        <br />
        <br />
        Links to the repositories:
        <br />
        <a
          href="https://github.com/lktay/whereflix-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/lktay/whereflix-app
        </a>
        <br />
        <a
          href="https://github.com/lktay/whereflix-server"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/lktay/whereflix-server
        </a>
      </p>
    </div>
  );
};

export default About;
