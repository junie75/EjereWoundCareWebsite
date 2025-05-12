import React from "react";
import ReviewBox from "./ReviewBox";
import { testimonials } from "./getTestimonials";
import Slideshow from "./Slideshow";
import { Slide } from "@mui/material";

export default function ReviewCarousel() {
  const featuredReviews = ["Justin Miles", "Jim Collins"]; //use to later store names of reviews we want to be featured?

  const reviewArray = testimonials.slice(0, 5).map((review, index) => (
    // <div className="reviewCarouselBox">
    <ReviewBox testimonial={review} index={index} fromCarousel={true} />
    // </div>
  ));

  return <Slideshow array={reviewArray} />;
}
