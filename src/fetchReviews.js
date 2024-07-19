import React, { useEffect, useState } from "react";

import { useGoogleReviews } from "./GoogleReviewsContext";

import { useGoogleMaps } from "./GoogleMapsContext";

const fetchReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { placeId } = useGoogleReviews();
  const { isLoaded, loadError } = useGoogleMaps();
};
