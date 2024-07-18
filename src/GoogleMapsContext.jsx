//context that manages loading google maps api
import React, { createContext, useContext } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const GoogleMapsContext = createContext();

export const GoogleMapsProvider = ({ apiKey, children }) => {
  //load google maps api seperately from google reviews
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  return (
    <GoogleMapsContext.Provider value={{ isLoaded, loadError }}>
      {children}
    </GoogleMapsContext.Provider>
  );
};

export const useGoogleMaps = () => {
  return useContext(GoogleMapsContext);
};
