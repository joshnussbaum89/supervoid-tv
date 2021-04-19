import React from "react";
import About from "./About";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  return (
    <div className="header">
      <nav id="header-nav">
        <h1>
          <a href="#">Supervoid</a>
        </h1>
        <ul className="desktop-nav">
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
        <ul className="mobile-nav">
          <li>
            <MenuIcon
              className="hamburger"
              style={{ fontSize: "2rem", cursor: "pointer" }}
            />
          </li>
        </ul>
      </nav>
      <About />
    </div>
  );
};

export default Header;

// {
//   /* <li>
//             <a
//               href="https://www.instagram.com/supervoidstudio/"
//               target="_blank"
//             >
//               insta
//             </a>
//           </li> */
// }
