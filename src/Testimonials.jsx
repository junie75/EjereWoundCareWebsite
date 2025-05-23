//Component to display testimonials from patients

import React from "react";
import Layout from "./Layout";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating"; //star rating ui

export default function Testimonials() {
  const testimonials = [
    {
      name: "Justin Miles",
      rating: 5,
      review:
        "Great customer service is nearly impossible to come by these days, so I wanted to take a moment to express my heartfelt gratitude for the exceptional care and attention I received during my visit today! From the moment I arrived, I felt welcomed and supported by your entire team. Your professionalism and genuine concern for my well-being truly made a difference in my experience. I appreciate the time you took to listen to my concerns and answer all my questions with patience and clarity. Thank you once again for your dedication and compassion. I look forward to continuing my care with your team in the future!",
    },
    {
      name: "Bonnie Tisdale",
      rating: 5,
      review:
        "So thankful for Dr. Ejere and his team!!! I was 12 weeks pregnant and was healing from a dog bite. The first day I went in Dr. Ejere immediately had me admitted to hospital for life saving surgery. Had my wound gone on w out proper treatment i would have developed sepsis and my daughters life would have been in jeapordy! Once released from hospital they gave me the best care when changing my dressings and helping me heal! They were always so kind informative and gentle as they could be when changing my dressings!! Highly recommend this wound care Dr. and team!",
    },
    {
      name: "Ed Lasley",
      rating: 5,
      review:
        "Wonderful and kind staff. Very professional and experienced. Dr Ejere takes time to understand details, issues, and history related to the problem. He takes time thinking through the elements before formulating a strategy and tactical approach, and ensures that the patient buys-in to the plan. He is open minded about alternatives and researches suggested approaches.",
    },
    {
      name: "Paul E",
      rating: 5,
      review:
        "The staff is very professional and they care for the well being of the patient. All steps are completely explained. The chamber is primarily made of Fiberglass which helps reduce the closed in feeling. The TV helps too. The staff was attentive to my needs and sensitivity which I appreciated. Overall I appreciated the positive spirit and response to my wishes.",
    },
    {
      name: "Sherice Miller",
      rating: 5,
      review:
        "Excellent care! Excellent staff! Dr. Ejere saved my life with his incredible care and medical knowledge of the circulatory system and how wounds heal! No better medical staff in the state!!! I highly recommend the Ejere Wound and Hyperbaric Clinic for the best wound care ever! Thank you, Dr. Ejere, Melonie, Jackie, Juni, Linda, Felicia, Theresa and McKensie! Dr. Where has excellent skill at explaining option, care and advice where it is easily understood. His English is also impeccable! Speaks professionally!",
    },
    {
      name: "Tina Graves",
      rating: 5,
      review:
        "They have the best care I've ever received. I would recommend them for any wounds you may have. The staff are always sweet and caring. Dr Ejere has the best bedside manner he takes care of you until you have fully healed. He was very patient with me. They explained every concern I had and made sure I had everything I needed for my wound. They are very professional at what they do they make sure your comfortable. They take very EXCELLENT care of you I can't explain it enough.",
    },
    {
      name: "Garrett Sampley",
      rating: 5,
      review:
        "Can't say enough good things about Dr Ejere and his team. I could go on all day. If you have a wound that needs the best care available, go see Dr Ejere.",
    },
    {
      name: "Lisa Oliver",
      rating: 5,
      review: "Great doctor most wonderful staff with great bedside manners.",
    },
    {
      name: "Nora Parsons",
      rating: 5,
      review:
        "Very concerned for my health and comfort. Always timely and excellent at their job. Dr. listen to my concerns and explains what needs to be done.",
    },
    {
      name: "John Thomson",
      rating: 5,
      review:
        "Takes the extra time to explain the details of the visit. Dr Ejere and staff are very courteous and polite.",
    },
    {
      name: "Jim Collins",
      rating: 5,
      review:
        "Back in 2017 my mother was in a local care center and had a wound that was ongoing and painful, I would take her for her appointments and she would want me to go back with her to see the Dr. and every time Dr. Ejere and the nurses were very caring to her and friendly to both of us. Then in January and February of 2019 and again in July and August of 2020 I had some issues with a wound on my foot due to diabetes and did hyperbaric treatments at the center. During my many sessions, I was treated with kindness and professionalism that made a bad thing bearable. So, I can honestly say that Dr. Ejere and the staff of skilled nurses and office personnel are at the top of their profession and rate up there with any other wound care center.",
    },
    // {
    //   name: "Bonnie Tisdale",
    //   rating: 5,
    //   review:
    //     "I always receive outstanding care here! Best wound care team in Parker county. Always professional yet compassionate. First day I showed up Dr Ejere (sorry spelled wrong prob) advised me to head to er because I needed surgery to remove bacteria from a dog bite. In doing so he saved mine and my unborn child’s life from possible sepsis. After my surgery I have been going back for weekly dressing changes. Again best team and I appreciate all they do to help me and other heals and get back our quality of life!",
    // },
    {
      name: "Linda Lee Everitt Coleman",
      rating: 5,
      review:
        "I am so very thankful for Dr Ejere. And ALL of his team I am a cancer patient, I had a very large open wound due to radiation therapy. Dr Ejere and his team are the absolute BEST. They treat me like I matter. This is the one Dr I don't dread going to. I actually enjoy coming here. when I leave, I know I feel better, and they truly care. Special shout out to Jackie.",
    },

    {
      name: "Jay Hayes",
      rating: 5,
      review:
        "I would like to say thank you to Dr Ejere and everyone at Wound Care Weatherford for the best care from the beginning to the end in healing me. It has been a long process and they made it as professional and caring as it could possibly be. Your efforts will not be forgotten.",
    },
    {
      name: "Mannyz 3",
      rating: 5,
      review:
        "D Ejere and his staff are great. I appreciate his bed side manner and he and his staff genuinely care about my treatment. Anyone needing help with wounds will do themselves a favor by seeing Ejere Wound Care for treatment. I feel welcomed every time I come for my treatments.",
    },

    {
      name: "Chris Woodrum",
      rating: 5,
      review:
        "Dr. Ejere and the entire staff were awesome. Everyone went above and beyond in my treatment. Highly recommend",
    },
    {
      name: "Lori Smith",
      rating: 5,
      review:
        "The Doctor and the whole care team here is awesome! Would recommend anyone needing wound care to see this clinic.",
    },
    {
      name: "Katie O'Leary",
      rating: 5,
      review:
        "Incredible team. Incredible service. Kind. Empathetic. Comforting. Care is top notch. I wouldn’t go anywhere else. 100%. Thank you to Dr. Ejere’s team for taking incredible care of my elderly mother. 🙏🏼",
    },
    {
      name: "General Lee Custom",
      rating: 5,
      review:
        "Love the nurses and all the staff ! Great place, Dr Ejerry is very professional.i highly recommend this place ! They really care about their patients",
    },
    {
      name: "James Powell",
      rating: 5,
      review:
        "Dr Ejere and staff are the best. Everyone was friendly and professional. I had the best care possible.",
    },
    {
      name: "K W",
      rating: 5,
      review:
        "I would just like to thank Dr Ejere and his amazing team . Everyone there is so sweet and kind . Very professional, I highly recommend !!!",
    },
    {
      name: "Frances Ennis",
      rating: 5,
      review:
        "They really  take great  care  of  there parents. I'm very thankful  for  there help with my wound. So thank you all.",
    },
    {
      name: "Susan Robertson",
      rating: 5,
      review:
        "They literally saved my life. They have taken excellent care of me. I highly recommend them.",
    },
    // {
    //   name: "Darla Smith",
    //   rating: 5,
    //   review:
    //     "When I first walked through their door first in 2019 and then a second in 2021, I knew I was going to receive the treatment I needed. The nursing staff are amazing and, I have no doubt, that is due to the leadership of Dr Ejere. The respect shown between Dr Ejere and the staff promotes trust and enhances the healing process. The team has excellent communication, showed compassion, and their competency was at the top of any other hospital team I have witnessed. Engaging the patient plays a crucial role in the successful treatment and of the patient following the treatment plan after their release. On every occasion, time was taken by Dr Ejere and nursing staff to fully explain what was being done. Thanks to Dr Ejere for his expertise and for having such an extraordinary wound care team.",
    // },
    // {
    //   name: "Janice Moore",
    //   rating: 5,
    //   review:
    //     "The Wound Care Center team was fantastic. Everyone was professional while being caring and compassionate. Larissa was so helpful and gentle tending my wound. Dr. Ejere is a great leader and has a great team. I am blessed to have been under their care!",
    // },
    // {
    //   name: "J.R.",
    //   rating: 5,
    //   review:
    //     "“Medical City Wound Care Center in Weatherford is an outstanding, five-star, professional wound healing office with Dr. Ejere and staff. D. Ejere and his staff excel in care and compassion. Starting with mom’s first surgery they treated her with a wound vac, 40 treatments in a hyperbaric chamber, numerous skin grafts and 2 more surgeries until her leg was completely healed. They told me from the beginning their whole goal was to save my mom’s leg and that’s what they did! After 9 months of treatment, at her last appointment, we all had an emotional celebration beause Dr Ejere and staff had become like family. They all were so kind and caring! Dr Ejere was always very patient to answer every question and explain every treatment in great detail. As a daughter this was extremely comforting to me. My mom said, “She would do anything he asked her to do, even if he has asked her to stand on her head she would!” We highly recommend Dr Ejere and all his staff. We are so thankful and blessed by their care and friendship! Weatherford is blessed to have such an outstanding doctor here. Thank you all from the bottom of our hearts",
    // },
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
    const letterAvatar =
      name === "J.R." ? "JR" : name.split(" ")[0][0] + name.split(" ")[1][0];

    return letterAvatar;
  }

  return (
    <Layout>
      <div className="pageContainer">
        <div className="intro">
          <div className="title">Testimonials</div>
          {/* <div> */}
          <iframe
            // width="560"
            // height="315"
            className="youtubePlayer"
            src="https://www.youtube.com/embed/lHkjrLQoZgc?si=n7nbor8ihavE8Bs3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {/* </div> */}
          <p>
            Please take a look below at some of the recent testimonials we have
            received from our patients. We welcome patient feedback to let us
            know how we can improve – please send us details of your experience.
          </p>
        </div>
        {/* Create a review box for each testimonial with a profile photo and a rating */}
        <div className="testimonialsSection">
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
