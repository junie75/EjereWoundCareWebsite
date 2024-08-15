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
// import Logo from "./assets/LogoDesign3UPSCALEDTransparentv3.png";
// import Logo2 from "./assets/RedoneLogoTransLargerv2.png";
import Logo2 from "./assets/RedoneLogoTrans400x118.png";

// import Logo2 from "./assets/LogoSmaller.png";
import { Link } from "react-router-dom";
import { NestedDropdown } from "mui-nested-menu";
import { styled } from "@mui/system";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const CustomMenu = styled(Menu)({
  "& .MuiPaper-root": {
    backgroundColor: "white", // Example background color
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Example box shadow
  },
});

const CustomMenuItem = styled(MenuItem)({
  color: "black", // Example text color
  "&:hover": {
    backgroundColor: "#f0f0f0", // Example hover background color
  },
});

function Navigation({ isHomePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const history = useHistory();
  const navigate = useNavigate();

  //mobile menu location clicks
  const handleMenuItemClick = (event, item) => {
    // console.log(`Clicked: ${item.label}`);
    // Example navigation based on item label
    switch (item.label) {
      case "Home":
        navigate("/");
        break;
      case "About":
        navigate("/about");
        break;
      case "Wound Care":
        navigate("/services/woundcare");
        break;
      case "Hyperbaric":
        navigate("/services/hbot");
        break;
      case "Contact":
        navigate("/contact");
        break;
      case "Testimonials":
        navigate("/testimonials");
        break;
      case "Patient Portal":
        //open patient portal in new tab
        window.open(
          "https://pp-wfe-100.advancedmd.com/127093/account/logon",
          "_blank"
        );
        break;
      // Add more cases for other menu items as needed
      default:
        break;
    }
  };

  const menuItemsData = {
    label: "☰",
    items: [
      {
        label: "Home",
        callback: handleMenuItemClick,
      },
      {
        label: "About",
        callback: handleMenuItemClick,
      },
      {
        label: "Services",
        items: [
          {
            label: "Wound Care",
            callback: handleMenuItemClick,
          },
          {
            label: "Hyperbaric",
            callback: handleMenuItemClick,
          },
        ],
      },
      {
        label: "Contact",
        callback: handleMenuItemClick,
      },
      {
        label: "Testimonials",
        callback: handleMenuItemClick,
      },
      {
        label: "Patient Portal",
        callback: handleMenuItemClick,
      },
    ],
  };

  return (
    <div className={`navbar ${isHomePage ? "" : "navSolidBackground"}`}>
      <div className="logoContainer">
        <Link to="/">
          <img
            src={Logo2}
            alt="Logo"
            className="logo"
            width="200"
            height="100"
          />
        </Link>
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
            <Link
              to="https://pp-wfe-100.advancedmd.com/127093/account/logon"
              target="_blank"
            >
              Patient Portal
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu">
        <NestedDropdown
          menuItemsData={menuItemsData}
          MenuProps={{ elevation: 3 }}
          ButtonProps={{
            variant: "string",
          }}
          // onClick={(event, item) => console.log("Clicked", event, item)}
        />
      </div>
    </div>
  );
}

export default Navigation;
