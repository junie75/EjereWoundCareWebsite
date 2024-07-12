import React, { createContext, useContext } from "react";

// src/GoogleReviewsContext.js
// import React, { createContext, useContext } from "react";

const GoogleReviewsContext = createContext();

export const GoogleReviewsProvider = ({ apiKey, placeId, children }) => {
  return (
    <GoogleReviewsContext.Provider value={{ apiKey, placeId }}>
      {children}
    </GoogleReviewsContext.Provider>
  );
};

export const useGoogleReviews = () => {
  return useContext(GoogleReviewsContext);
};
