//Component to display information about the clinic and the team members

import React from "react";
import Layout from "./Layout";
import aboutImg1 from "./assets/happyDoctors.png";
import aboutImg2 from "./assets/aboutImg2.jpg";
import profileJackie from "./assets/profileJackie2.jpg";
import profileMelanie from "./assets/profileMelanie3.jpg";
import profileJuni from "./assets/profileJuni2.jpg";
// import profileHenry from "./assets/henryFormalv5.jpg";
import profileHenry from "./assets/profileHenry5.jpg";
import profileTeresa from "./assets/profileTeresa2.jpg";
import profileLinda from "./assets/profileLinda2.jpg";
import profileLarissa from "./assets/profileLarissa3.jpg";
import profileFelicia from "./assets/profileFelicia.jpg";

//FOR DEVELOPMENT
// import carousel1 from "../public/assets/carousel1.jpg";
// import carousel2 from "../public/assets/carousel2.jpg";
// import carousel3 from "../public/assets/carousel3.jpg";
// import carousel4 from "../public/assets/carousel4.JPG";
// import carousel5 from "../public/assets/carousel5.JPG";
// import carousel6 from "../public/assets/carousel6.jpg";

// import carousel1desk from "../public/assets/carousel1.avif";
// import carousel2desk from "../public/assets/carousel2.avif";
// import carousel3desk from "../public/assets/carousel3.avif";
// import carousel4desk from "../public/assets/carousel4.avif";
// import carousel5desk from "../public/assets/carousel5.avif";
// import carousel6desk from "../public/assets/carousel6.avif";

//FOR PRODUCTION
import carousel0 from "/assets/carousel0.jpg";
import carousel1 from "/assets/carousel1.jpg";
import carousel2 from "/assets/carousel2.jpg";
import carousel3 from "/assets/carousel3.jpg";
import carousel4 from "/assets/carousel4.JPG";
import carousel5 from "/assets/carousel5.JPG";
import carousel6 from "/assets/carousel6.jpg";
import carousel7 from "/assets/carousel7.jpg";
import carousel8 from "/assets/carousel8.jpg";
import carousel9 from "/assets/carousel9.jpg";
import carousel10 from "/assets/carousel10.jpg";
import carousel11 from "/assets/carousel11.jpg";

import carousel0desk from "/assets/carousel0.avif";
import carousel1desk from "/assets/carousel1.avif";
import carousel2desk from "/assets/carousel2.avif";
import carousel3desk from "/assets/carousel3.avif";
import carousel4desk from "/assets/carousel4.avif";
import carousel5desk from "/assets/carousel5.avif";
import carousel6desk from "/assets/carousel6.avif";
import carousel7desk from "/assets/carousel7desk.avif";
import carousel8desk from "/assets/carousel8desk.avif";
import carousel9desk from "/assets/carousel9desk.avif";
import carousel10desk from "/assets/carousel10desk.avif";
import carousel11desk from "/assets/carousel11desk.avif";

import { Carousel } from "react-responsive-carousel";
import "./CustomCarousel.css";

// const carouselImages = [
//   carousel1,
//   carousel2,
//   carousel3,
//   carousel4,
//   carousel5,
//   carousel6,
//   carousel7,
//   carousel8,
//   carousel9,
//   carousel10,
// ];

// const desktopCarousel = [
//   carousel1desk,
//   carousel2desk,
//   carousel3desk,
//   carousel4desk,
//   carousel5desk,
//   carousel6desk,
//   carousel7desk,
//   carousel8desk,
//   carousel9desk,
//   carousel10desk,
// ];

//mobile image dimensions are 1200 x 900 (or at very least a width of 1200)
//destop image dimensions are 1920 x 700 exactly
const carouselImages = [
  { mobile: carousel0, desktop: carousel0desk },
  { mobile: carousel1, desktop: carousel1desk },
  { mobile: carousel2, desktop: carousel2desk },
  { mobile: carousel3, desktop: carousel3desk },
  { mobile: carousel4, desktop: carousel4desk },
  { mobile: carousel5, desktop: carousel5desk },
  { mobile: carousel6, desktop: carousel6desk },
  { mobile: carousel7, desktop: carousel7desk },
  { mobile: carousel8, desktop: carousel8desk },
  { mobile: carousel9, desktop: carousel9desk },
  { mobile: carousel10, desktop: carousel10desk },
  { mobile: carousel11, desktop: carousel11desk },
];

const tooglesGroupId = "Toggles";
const valuesGroupId = "Values";
const mainGroupId = "Main";

const getConfigurableProps = () => ({
  showArrows: false,
  showStatus: false,
  showIndicators: true,
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows: true,
  autoPlay: true,
  stopOnHover: true,
  swipeable: true,
  dynamicHeight: false,
  emulateTouch: true,
  autoFocus: false,
  thumbWidth: 100,
  selectedItem: 0,
  interval: 5000,
  transitionTime: 500,
  swipeScrollTolerance: 5,
  ariaLabel: undefined,
});

const slideShow = () => (
  <Carousel {...getConfigurableProps()} className="">
    {
      //iterate over the array of objects
      carouselImages.map((image, index) => (
        //for each object, create a picture element with a
        //source element for the mobile image and a source element for the desktop image
        //browser will choose the appropriate image based on the media query
        <picture className="slide desktop" key={index}>
          <source
            type="image/avif"
            srcSet={image.desktop}
            media="(min-width: 1024px)"
            className="slideImage desktop"
          />
          <img
            className="slideImage"
            src={image.mobile}
            alt={`carousel${index + 1}`}
            width={1200}
            height={900}
          />
        </picture>
      ))
    }
  </Carousel>
);

export default function About() {
  const teamMembers = [
    {
      photo: profileHenry,
      name: "Henry Ejere, MD, MS, FAPWCA, MACP",
      role: "Medical Director",
      blurb: `Dr. Ejere has a background in internal medicine with a special interest, focus, and expertise in treating difficult-to-heal wounds using advanced wound care modalities, including hyperbaric oxygen therapy. With over 30 years of experience as a physician and more than 12 years dedicated to wound care, he boasts a proven track record with a healing rate of over 95%. Discovering the wound care specialty allowed Dr. Ejere to find his true purpose in life. He promises to provide compassionate, professional, and loving care for every patient, treating each one like family.`,
      email: "henry.ejere@ejerewoundcare.com",
      phone: "682-582-2989",
      profileFlip: true,
    },
    {
      photo: profileJackie,
      name: "Jacki Morgan, RN-MSN, CHRN, A-IPC",
      role: "Lead Nurse",
      blurb: `Jacki began her nursing career as a licensed vocational nurse in 2012 and has had a passion for wound care since that time. After becoming a registered nurse in 2015, she went on to complete her bachelor’s and master's degrees in nursing and obtained certifications in both hyperbaric oxygen therapy and as an associate infection preventionist.\n\n
                “I take pride in treating our patients physically, but also in addressing the emotional and mental strain these situations have on their lives and that of their families.” `,
      email: "jacki.morgan@ejerewoundcare.com",
      phone: "682-582-2989",
      profileFlip: false,
    },
    {
      photo: profileMelanie,
      name: "Melanie Parker, RN-MSN, CHRN",
      role: "Lead Nurse",
      blurb: `Melanie began her nursing career in 2004 as a registered nurse. She holds a Master of Science in nursing and is also certified in hyperbaric oxygen therapy.  She found her calling in wound care and hyperbaric oxygen therapy in 2018.  
            “I am passionate about impacting my patient’s lives by empowering them with the knowledge and support they need to achieve optimal health and quality of life.”`,
      email: "melanie.parker@ejerewoundcare.com",
      phone: "682-582-2989",
      profileFlip: false,
    },
    {
      photo: profileJuni,
      name: "Juni Ejere, BA CIS",
      role: "Software Optimization Specialist",
      blurb: `Juni began her career after graduating from St. Mary's University with a degree in Computer Information Systems. She is  serving as the Software Optimization Specialist for the clinic, where she leverages technology to optimize operations through implementing automation opportunities, digitizing paper-based processes, and developing custom software solutions. 
"Innovation begins by simply asking how a task can be performed more efficiently and then building the solution. I am passionate about simplifying the lives of healthcare professionals and transforming any vision into reality."`,
      email: "juni.ejere@ejerewoundcare.com",
      phone: "682-582-2989",
      profileFlip: false,
    },
    {
      photo: profileTeresa,
      name: "Teresa Correa, BSc, CNA ",
      role: "Office Coordinator",
      blurb: `Teresa began her career in 2012 as a Certified Nursing Assistant (CNA) and earned her Bachelor of Science in Health Care Management in 2020. Currently serving as the Office Coordinator at the clinic, she brings over 7 years of experience in administrative support, excellent organizational skills, attention to detail, and a proactive approach to managing office operations. Teresa is passionate about making a difference in patients' lives and ensuring they receive the highest quality care possible. “My goal is to enhance efficiency and contribute to a positive and collaborative workplace culture.”`,
      email: "tcorrea@ejerewoundcare.com",
      phone: "682-582-2989",
      profileFlip: true,
    },
    {
      photo: profileLinda,
      name: "Linda Philipski, RN CHWS",
      role: "Certified Hyperbaric Wound Specialist Registered Nurse",
      blurb: `Linda has been a registered nurse for 30 plus years. Her passion for wound care started in 2004. She later became Hyperbaric and Wound Care certified. “I have always enjoyed helping people in their time of need and feel I’m mutually rewarded from patient bonds.”`,
      email: "linda.philipski@ejerewoundcare.com",
      phone: "682-582-2989",
      profileFlip: true,
    },
    {
      photo: profileFelicia,
      name: "Felicia Rogers, CPT-NPA, CCMA",
      role: "Certified Clinical Medical Assistant",
      blurb: `Felicia began her career in the medical field over 13 years ago. She is
a dedicated phlebotomist (CPT-NPA) and a Certified Clinical Medical
Assistant (CCMA) Throughout her career, she has developed a deep
passion for patient care and a commitment to excellence in her work.
She takes pride in her ability to connect with patients and ensure their
comfort, all while maintaining a high standard of professionalism. Her
journey in healthcare has equipped her with a diverse skill set and a
wealth of knowledge that she will continue to build upon every day. `,
      email: "felicia.rogers@ejerewoundcare.com",
      phone: "682-582-2989",
      profileFlip: false,
    },
    {
      photo: profileLarissa,
      name: "Larissa Sugg, RN-BSN, CWON",
      role: "PRN HBO Nurse",
      blurb: `Larissa has 24 years of nursing experience and is also a certified wound and ostomy nurse. Larissa began working with Dr. Ejere in 2021 and enjoys providing specialized wound care to the many patients she meets. "I enjoy educating the patients and their families on complex wounds and seeing their satisfaction once the wound closes". `,
      email: "referrals@ejerewoundcare.com",
      phone: "682-582-2989",
      profileFlip: false,
    },
  ];
  return (
    <Layout>
      <div className="pageContainer">
        <div className="aboutSection">
          <div className="title">About Our Clinic</div>
          <div className="banner">
            {slideShow()}
            <p className="crimson-pro-reg bannerText">
              Ejere Wound Care & Hyperbaric Oxygen Therapy is an advanced wound
              care clinic that aims to provide personalized, compassionate care
              to patients with chronic wounds in Parker County and surrounding
              communities.
            </p>
          </div>

          <div className="valuesSection">
            <div className="value">
              <div className="iconBox">
                <span className="material-symbols-outlined icon-large">
                  visibility
                </span>
              </div>
              <div className="motto">
                <h2>Our Vision</h2>
                <p>
                  We strive to be the leading center of excellence for wound
                  healing in North Texas.
                </p>
              </div>
            </div>
            <div className="value">
              <div className="iconBox">
                <span className="material-symbols-outlined icon-large">
                  target
                </span>
              </div>
              <div className="motto">
                <h2>Our Mission</h2>
                <p>
                  We are dedicated to providing specialized wound care with
                  professionalism, respect, and transparency, collaborating with
                  referring providers to facilitate healing, prevent limb loss,
                  and enhance quality of life.
                </p>
              </div>
            </div>
            <div className="value">
              <div className="iconBox">
                <span className="material-symbols-outlined icon-large">
                  partner_exchange
                </span>
              </div>
              <div className="motto">
                <h2>Patient Promise</h2>
                <p>
                  We promise to treat every patient with the same love, dignity,
                  and respect that we would give to our own family.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="teamSection">
          <div className="title">Meet Our Team</div>
          <div className="teamBoxes">
            {teamMembers.map((member, index) => (
              <div key={index} className="teamMember">
                <div
                  className={`memberPic ${
                    member.profileFlip ? "profileFlip" : ""
                  }`}
                >
                  <img
                    src={member.photo}
                    alt="memberPhoto"
                    width={168}
                    height={168}
                  />
                </div>

                <div className="info">
                  <div className="name noto-serif-bold">{member.name}</div>
                  <p className="role">{member.role}</p>
                  <p className="blurb crimson-pro-reg">{member.blurb}</p>
                  {/* <div className="email">
                    <span>Email:</span> {member.email}
                  </div> */}
                  {/* <div className="phone">
                    <span>Phone:</span> {member.phone}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
