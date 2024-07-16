// import React from "react";
// import Logo from "./assets/LogoDesign3UPSCALEDTransparentv3.png";
// import Logo2 from "./assets/LogoSmaller.png";
// import { Link } from "react-router-dom";

// function Navigation({ isHomePage }) {
//   return (
//     <div className={`navbar ${isHomePage ? "" : "navSolidBackground"}`}>
//       <div className="logoContainer">
//         <img src={Logo2} alt="Logo" className="logo" />
//       </div>
//       <div className="linkContainer">
//         <ul className="crimson-pro-bold navbar-menu">
//           <li className="navbar-item">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="/about">About</Link>
//           </li>
//           <li className="navbar-item services">
//             Services
//             <ul className="dropdown-menu">
//               <li className="dropdown-item">
//                 <Link to="/services/woundcare">Wound Care </Link>
//               </li>
//               <li className="dropdown-item">
//                 <Link to="/services/hbot">Hyperbaric</Link>{" "}
//               </li>
//             </ul>
//           </li>
//           <li className="navbar-item">
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="/testimonials">Testimonials</Link>
//           </li>
//           <li className="navbar-item portal">Patient Portal</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navigation;

import React, { useState } from "react";
import Logo from "./assets/LogoDesign3UPSCALEDTransparentv3.png";
import Logo2 from "./assets/LogoSmaller.png";
import { Link } from "react-router-dom";

function Navigation({ isHomePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isHomePage ? "" : "navSolidBackground"}`}>
      <div className="logoContainer">
        <img src={Logo2} alt="Logo" className="logo" />
      </div>
      <div className={"menuButton"} onClick={toggleMenu}>
        ☰
      </div>
      <div className={`linkContainer ${isMenuOpen ? "open" : ""}`}>
        <ul className="crimson-pro-bold navbar-menu">
          <li className="navbar-item">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="navbar-item services">
            Services
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link
                  to="/services/woundcare"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Wound Care
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/services/hbot" onClick={() => setIsMenuOpen(false)}>
                  Hyperbaric
                </Link>
              </li>
            </ul>
          </li>
          <li className="navbar-item">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/testimonials" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </Link>
          </li>
          <li className={`navbar-item ${isMenuOpen ? "" : "portal"}`}>
            Patient Portal
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
