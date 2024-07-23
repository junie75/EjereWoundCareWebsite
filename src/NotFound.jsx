import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "./assets/notFoundImage.png";

const NotFound = () => {
  return (
    <div className="pageContainer">
      <div className="notFoundContainer">
        <img src={notFoundImage} alt="Not Found" className="notFoundImage" />
        <h1 className="notFoundHeader">Oops! You seem to be lost.</h1>
        <div className="ctaBtn notFound">
          <Link to="/">Go Back Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
