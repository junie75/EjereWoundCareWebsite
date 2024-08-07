import React from "react";
import Layout from "./Layout";
import aboutImg1 from "./assets/happyDoctors.png";
import aboutImg2 from "./assets/aboutImg2.jpg";
import profileJackie from "./assets/profileJackie.JPG";
import profileMelanie from "./assets/profileMelanie.jpg";
import profileJuni from "./assets/profileJuni.jpg";
import profileHenry from "./assets/henryFormalv5.jpg";
// import building from "./assets/officeFrontv2.jpg";
import building from "./assets/OfficeFrontv3.jpg";
import carousel1 from "./assets/carousel1-min.jpg";
import carousel2 from "./assets/carousel2-min.jpg";
import carousel3 from "./assets/carousel3-min.jpg";
import carousel4 from "./assets/carousel4-min.JPG";
import carousel5 from "./assets/carousel5-min.JPG";
import carousel6 from "./assets/carousel6-min.jpg";
import { Carousel } from "react-responsive-carousel";
import "./CustomCarousel.css";

const carouselImages = [
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
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
  <Carousel
    {...getConfigurableProps()}
    // showArrows={true}
    // showStatus={true}
    // showIndicators={true}
    // infiniteLoop={true}
    // useKeyboardArrows={true}
    // autoPlay={true}
    // swipeable={true}
  >
    {carouselImages.map((image, index) => (
      <div className="slide" key={index}>
        <img className="slideImage" src={image} alt={`carousel${index + 1}`} />
        <p className=" slideText legend crimson-pro-reg ">
          Ejere Wound Care & Hyperbaric Oxygen Therapy is an advanced wound care
          clinic that aims to provide personalized, compassionate care to
          patients with chronic wounds in Parker County and surrounding
          communities.
        </p>
      </div>
    ))}
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
    },
    {
      photo: profileJackie,
      name: "Jacki Morgan, RN-MSN, CHRN, A-IPC",
      role: "Lead Nurse",
      blurb: `Jacki began her nursing career as a licensed vocational nurse in 2012 and has had a passion for wound care since that time. After becoming a registered nurse in 2015, she went on to complete her bachelor’s and master's degrees in nursing and obtained certifications in both hyperbaric oxygen therapy and as an associate infection preventionist.\n\n
                “I take pride in treating our patients physically, but also in addressing the emotional and mental strain these situations have on their lives and that of their families.” `,
      email: "jacki.morgan@ejerewoundcare.com",
      phone: "682-582-2989",
    },
    {
      photo: profileMelanie,
      name: "Melanie Parker, RN-MSN, CHRN",
      role: "Lead Nurse",
      blurb: `Melanie began her nursing career in 2004 as a registered nurse. She holds a Master of Science in nursing and is also certified in hyperbaric oxygen therapy.  She found her calling in wound care and hyperbaric oxygen therapy in 2018.  
            “I am passionate about impacting my patient’s lives by empowering them with the knowledge and support they need to achieve optimal health and quality of life.”`,
      email: "melanie.parker@ejerewoundcare.com",
      phone: "682-582-2989",
    },
    {
      photo: profileJuni,
      name: "Juni Ejere, BA CIS",
      role: "Software Optimization Specialist",
      blurb: `Juni began her career after graduating from St. Mary's University with a degree in Computer Information Systems. She is  serving as the Software Optimization Specialist for the clinic, where she leverages technology to optimize operations through implementing automation opportunities, digitizing paper-based processes, and developing custom software solutions. 
"Innovation begins by simply asking how a task can be performed more efficiently and then building the solution. I am passionate about simplifying the lives of healthcare professionals and transforming any vision into reality."`,
      email: "juni.ejere@ejerewoundcare.com",
      phone: "682-582-2989",
    },
  ];
  return (
    <Layout>
      <div className="pageContainer">
        <div className="aboutSection">
          <div className="title">About Our Clinic</div>
          <div className="banner">
            {/* <div className="photos">
              <img src={building} alt="aboutImg1" />
              {/* <img src={aboutImg2} alt="aboutImg2" /> /}
            </div> */}
            {slideShow()}
            <p className="crimson-pro-reg bannerText">
              Ejere Wound Care & Hyperbaric Oxygen Therapy is an advanced wound
              care clinic that aims to provide personalized, compassionate care
              to patients with chronic wounds in Parker County and surrounding
              communities.
            </p>
          </div>
          <div className="desc mission">
            <h2>Our Mission</h2>
            <p>
              {/* Our mission is to provide specialized wound care services with the
              highest level of professionalism, respect, compassion, sincerity
              and transparency to our patients, while collaborating and working
              closely with our referring providers and physician colleagues in
              other specialties to facilitate wound healing, prevent limb loss
              and improve quality of life. */}
              We are dedicated to providing specialized wound care with
              professionalism, respect, and transparency, collaborating with
              referring providers to facilitate healing, prevent limb loss, and
              enhance quality of life.
            </p>
          </div>
          <div className="desc hbot content">
            {/* <div className="promiseBox">
              <div className="iconBox">
                <span class="material-symbols-outlined icon-large">
                  stethoscope
                </span>
              </div>
              <div className="motto">
                <h2>Our Mission</h2>
                <p>
                  To provide wound care services with the highest level of
                  professionalism, respect, compassion, and transparency to our
                  patients.
                </p>
              </div>
            </div> */}
            <div className="promiseBox">
              <div className="iconBox">
                <span className="material-symbols-outlined icon-large">
                  visibility
                </span>
              </div>
              <div className="motto">
                <h2>Vision</h2>
                <p>
                  {/* To be the leading center of excellence and destination of
                  choice for treating difficult to heal wounds in North Texas. */}
                  We strive to be the leading center of excellence for wound
                  healing in North Texas.
                </p>
              </div>
            </div>
            <div className="promiseBox">
              <div className="iconBox">
                <span className="material-symbols-outlined icon-large">
                  partner_exchange
                </span>
              </div>
              <div className="motto">
                <h2>Patient Promise</h2>
                <p>
                  {/* To provide compassionate, professional, loving care for every
                  patient, every wound, every time. */}
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
                <div className="memberPic">
                  <img src={member.photo} alt="memberPhoto" />
                </div>

                <div className="info">
                  <div className="name noto-serif-bold">{member.name}</div>
                  <p className="role">{member.role}</p>
                  <p className="blurb crimson-pro-reg">{member.blurb}</p>
                  <div className="email">
                    <span>Email:</span> {member.email}
                  </div>
                  <div className="phone">
                    <span>Phone:</span> {member.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
