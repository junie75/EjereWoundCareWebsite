//component to fetch and display google reviews
import React, { useEffect, useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { useGoogleReviews } from "./GoogleReviewsContext";
import Rating from "@mui/material/Rating"; //star rating ui
import Avatar from "@mui/material/Avatar"; //avatar ui
import { useGoogleMaps } from "./GoogleMapsContext";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { placeId } = useGoogleReviews();
  const { isLoaded, loadError } = useGoogleMaps();

  useEffect(() => {
    if (isLoaded && placeId) {
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );

      const request = {
        placeId: placeId,
        fields: ["reviews"],
      };

      service.getDetails(request, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setReviews(place.reviews || []);
        }
      });
    }
  }, [isLoaded, placeId]);

  if (loadError)
    return <p>Error loading Google Maps API: {loadError.message}</p>;
  if (!isLoaded) return <p>Loading Google Maps API...</p>;

  return (
    // <div className="testimonialsSection">
    <>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="googleReviewBox">
            <Avatar src={review.profile_photo_url} alt="author photo" />
            <h3 className="crimson-pro-bold">{review.author_name}</h3>
            <Rating name="read-only" value={review.rating} readOnly />
            <p className="crimson-pro-reg">{review.text}</p>
            {/* <p>Rating: {review.rating}</p> */}
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </>
    // </div>
  );
};

export default GoogleReviews;
