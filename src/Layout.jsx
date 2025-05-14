//Component to display the layout of the website including the navigation bar, footer, and chat widget

import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import ChatWidget from "./ChatWidget";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`containers ${
        isHomePage ? "home-background" : "green-background"
      }`}
      // className="containers"
    >
      <ScrollToTop />
      <Navigation isHomePage={isHomePage} />
      {children}
      {/* <ChatWidget isHomePage={isHomePage} /> */}
      {/* if it is not the home page, render the footer, otherwise render a div with the class of footer-placeholder */}
      {/* {!isHomePage ? <Footer /> : <div className="footer-placeholder"></div>} */}
      <Footer />
    </div>
  );
};

export default Layout;
