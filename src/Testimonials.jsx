import React from "react";
import Layout from "./Layout";
import WrappedGoogleReviews from "./GoogleReviews";
import GoogleReviews from "./GoogleReviews";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating"; //star rating ui

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jim Collins",
      rating: 5,
      review:
        "Back in 2017 my mother was in a local care center and had a wound that was ongoing and painful, I would take her for her appointments and she would want me to go back with her to see the Dr. and every time Dr. Ejere and the nurses were very caring to her and friendly to both of us. Then in January and February of 2019 and again in July and August of 2020 I had some issues with a wound on my foot due to diabetes and did hyperbaric treatments at the center. During my many sessions, I was treated with kindness and professionalism that made a bad thing bearable. So, I can honestly say that Dr. Ejere and the staff of skilled nurses and office personnel are at the top of their profession and rate up there with any other wound care center.",
    },
    {
      name: "Darla Smith",
      rating: 5,
      review:
        "When I first walked through their door first in 2019 and then a second in 2021, I knew I was going to receive the treatment I needed. The nursing staff are amazing and, I have no doubt, that is due to the leadership of Dr Ejere. The respect shown between Dr Ejere and the staff promotes trust and enhances the healing process. The team has excellent communication, showed compassion, and their competency was at the top of any other hospital team I have witnessed. Engaging the patient plays a crucial role in the successful treatment and of the patient following the treatment plan after their release. On every occasion, time was taken by Dr Ejere and nursing staff to fully explain what was being done. Thanks to Dr Ejere for his expertise and for having such an extraordinary wound care team.",
    },
    {
      name: "Janice Moore",
      rating: 5,
      review:
        "The Wound Care Center team was fantastic. Everyone was professional while being caring and compassionate. Larissa was so helpful and gentle tending my wound. Dr. Ejere is a great leader and has a great team. I am blessed to have been under their care!",
    },
    {
      name: "J.R.",
      rating: 5,
      review:
        "“Medical City Wound Care Center in Weatherford is an outstanding, five-star, professional wound healing office with Dr. Ejere and staff. D. Ejere and his staff excel in care and compassion. Starting with mom’s first surgery they treated her with a wound vac, 40 treatments in a hyperbaric chamber, numerous skin grafts and 2 more surgeries until her leg was completely healed. They told me from the beginning their whole goal was to save my mom’s leg and that’s what they did! After 9 months of treatment, at her last appointment, we all had an emotional celebration beause Dr Ejere and staff had become like family. They all were so kind and caring! Dr Ejere was always very patient to answer every question and explain every treatment in great detail. As a daughter this was extremely comforting to me. My mom said, “She would do anything he asked her to do, even if he has asked her to stand on her head she would!” We highly recommend Dr Ejere and all his staff. We are so thankful and blessed by their care and friendship! Weatherford is blessed to have such an outstanding doctor here. Thank you all from the bottom of our hearts",
    },
  ];

  // Function to generate a color based on a string
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
    console.log(name);
    const letterAvatar =
      name === "J.R." ? "JR" : name.split(" ")[0][0] + name.split(" ")[1][0];
    console.log(letterAvatar);
    return letterAvatar;
  }

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
        <div className="googleReviews"></div>
        <div className="testimonialsSection">
          {/* <div className="reviewBox">
            <h3>Name</h3>
            <p>review</p>
          </div> */}
          <GoogleReviews />
          {testimonials.map((testimonial, index) => (
            <div key={index} className="reviewBox">
              <Avatar
                alt={testimonial.name}
                sx={{ bgcolor: stringToColor(testimonial.name) }}
              >
                {...stringAvatar(testimonial.name)}
              </Avatar>
              <h3 className="crimson-pro-bold">{testimonial.name}</h3>
              <Rating name="read-only" value={testimonial.rating} readOnly />
              <p className="crimson-pro-reg">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
