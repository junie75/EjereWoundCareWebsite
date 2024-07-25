//context that provides the Google API key and place ID to the GoogleReviews component
import React, { createContext, useContext } from "react";

// src/GoogleReviewsContext.js
// import React, { createContext, useContext } from "react";

const GoogleReviewsContext = createContext();

export const GoogleReviewsProvider = ({ apiKey, children }) => {
  return (
    <GoogleReviewsContext.Provider value={{ apiKey }}>
      {children}
    </GoogleReviewsContext.Provider>
  );
};

export const useGoogleReviews = () => {
  return useContext(GoogleReviewsContext);
};
