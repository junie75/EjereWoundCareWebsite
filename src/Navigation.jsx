import React from "react";
import Logo from "./assets/LogoDesign3UPSCALEDTransparentv3.png";
import Logo2 from "./assets/LogoSmaller.png";
import { Link } from "react-router-dom";

function Navigation({ isHomePage }) {
  return (
    <div className={`navbar ${isHomePage ? "" : "navSolidBackground"}`}>
      <img src={Logo2} alt="Logo" className="logo" />
      <div className="linkContainer">
        <ul className="crimson-pro-bold navbar-menu">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-item services">
            Services
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/services/woundcare">Wound Care </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/services/hbot">Hyperbaric</Link>{" "}
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="navbar-item">
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li className="navbar-item portal">Patient Portal</li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
