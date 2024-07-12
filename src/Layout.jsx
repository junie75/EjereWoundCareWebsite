import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

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
      <main>{children}</main>
      <Footer />
      {/* {!isHomePage && <Footer />} */}
    </div>
  );
};

export default Layout;
