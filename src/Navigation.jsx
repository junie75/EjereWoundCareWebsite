import React from "react";
import Logo from "./assets/LogoDesign3UPSCALEDTransparentv3.png";

function Navigation() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="linkContainer">
        <ul className="crimson-pro-bold"> 
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Testimonials</li>
          <li className="portal">Patient Portal</li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
