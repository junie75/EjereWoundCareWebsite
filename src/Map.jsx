// ****NO LONGER USED**** //component to display the map to the contact page
// import React, { useState, useCallback, useEffect } from "react";
// import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
// import { useGoogleReviews } from "./GoogleReviewsContext";
// import { useGoogleMaps } from "./GoogleMapsContext";

// //define height and width of map
// const containerStyle = {
//   width: "400px",
//   height: "400px",
// };

// //define center of map
// const center = {
//   lat: 32.74985965794493,
//   lng: -97.7864581496151,
// };

// function Map() {
//   const { isLoaded } = useGoogleMaps();
//   // const { apiKey } = useGoogleReviews();
//   // const { isLoaded } = useJsApiLoader({
//   //   id: "google-map-script",
//   //   googleMapsApiKey: apiKey,
//   // });

//   //set map and ejere wound care center variables
//   const [map, setMap] = useState(null);
//   // const [place, setPlace] = useState(null);
//   // const [infoWindowPosition, setInfoWindowPosition] = useState(center);

//   const onLoad = useCallback(function callback(map) {
//     setMap(map);
//   }, []);

//   const onUnmount = useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return isLoaded ? (
//     <GoogleMap
//       //   id="circle-example"
//       mapContainerClassName="mapContainer"
//       //   mapContainerStyle={containerStyle}
//       center={center}
//       zoom={19}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {/* Child components, such as markers, info windows, etc. */}
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// }

// export default React.memo(Map);
