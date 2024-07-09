import React from "react";
import Logo from "./assets/LogoDesign3UPSCALEDTransparentv3.png";
import Logo2 from "./assets/LogoSmaller.png";
import { Link } from "react-router-dom";

function Navigation({ isHomePage }) {
  return (
    <div className={`navbar ${isHomePage ? "" : "navSolidBackground"}`}>
      <img src={Logo2} alt="Logo" className="logo" />
      <div className="linkContainer">
        <ul className="crimson-pro-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services/woundcare">Services</Link>
          </li>
          <li>Contact</li>
          <li>Testimonials</li>
          <li className="portal">Patient Portal</li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
