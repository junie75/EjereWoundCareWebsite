//Component to display testimonials from patients

import React from "react";
import Layout from "./Layout";

import { testimonials } from "./getTestimonials";
import ReviewBox from "./ReviewBox";

export default function Testimonials() {
  // Function to generate a color based on a string

  return (
    <Layout>
      <div className="pageContainer">
        <div className="intro">
          <div className="title">Testimonials</div>
          <p>
            Please take a look below at some of the recent testimonials we have
            received from our patients. We welcome patient feedback to let us
            know how we can improve – please send us details of your experience.
          </p>
        </div>
        {/* Create a review box for each testimonial with a profile photo and a rating */}
        <div className="testimonialsSection">
          {testimonials.map((testimonial, index) => (
            <ReviewBox testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
