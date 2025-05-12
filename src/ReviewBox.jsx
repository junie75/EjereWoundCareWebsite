import React from "react";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating"; //star rating ui

export default function ReviewBox({
  testimonial,
  index,
  fromCarousel = false,
}) {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 20)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  // Function to generate a letter avatar for each testimonial
  function stringAvatar(name) {
    const letterAvatar =
      name === "J.R." ? "JR" : name.split(" ")[0][0] + name.split(" ")[1][0];

    return letterAvatar;
  }
  return (
    <div
      key={index}
      className={`reviewBox ${fromCarousel ? "reviewCarousel" : ""}`}
    >
      <Avatar
        alt={testimonial.name}
        sx={{ bgcolor: stringToColor(testimonial.name) }}
      >
        {...stringAvatar(testimonial.name)}
      </Avatar>
      <h3 className="crimson-pro-bold">{testimonial.name}</h3>
      <Rating name="read-only" value={testimonial.rating} readOnly />
      <p className={`crimson-pro-reg ${fromCarousel ? "reviewCarousel" : ""}`}>
        {testimonial.review}
      </p>
      {/* <a href={"/testimonials"} className="crimson-pro-reg reviewReadMore">
        Read More
      </a> */}
    </div>
  );
}
