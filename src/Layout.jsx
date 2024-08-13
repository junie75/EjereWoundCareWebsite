import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import ChatWidget from "./ChatWidget";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`containers ${
        isHomePage ? "home-background" : "green-background"
      }`}
    >
      <Navigation isHomePage={isHomePage} />
      {/* <main> */}
      {children}
      {/* </main> */}
      <ChatWidget isHomePage={isHomePage} />
      {/* <Footer /> */}
      {!isHomePage ? <Footer /> : <div className="footer-placeholder"></div>}
    </div>
  );
};

export default Layout;
