import React from "react";
import About from "./About";

const Header = () => {
  return (
    <div className="header">
      <nav id="header-nav">
        <h1>
          <a href="#">Supervoid</a>
        </h1>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <About />
    </div>
  );
};

export default Header;
