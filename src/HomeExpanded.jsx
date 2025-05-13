import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import BlogCarousel from "./BlogCarousel";
import bandaid from "./assets/bandageIcon.png";
import hboChamber from "./assets/hbochamberIcon.png";
import henry from "./assets/profileHenry5.jpg";

export default function HomeExpanded() {
  return (
    <Layout>
      <div className="homeContainer expanded">
        <div className="homeDiv expanded">
          {/* <div> */}
          <div className="noto-serif-bold hugeText">
            Healing Starts Here - Advanced Wound Care & Hyperbaric Oxygen
            Therapy
          </div>
          <div className="smallerText">
            Experience faster, more effective recovery through our state of the
            art treatments.
          </div>
          <div className="ctaBtn crimson-pro-reg">
            <Link
              to={"https://patientportal.advancedmd.com/127093/onlineintake"}
              target="_blank"
            >
              Request Appointment
            </Link>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="pageContainer expanded">
        <div className="homeSection ourServices">
          <div className="homeSectionHeader">Our Services</div>
          <div className="serviceCardContainer">
            <div className="serviceCard">
              <div className="cardHeader">
                <div className="headerIcon">
                  <img src={hboChamber} alt="" />
                </div>
                <div className="headerTitle">Hyperbaric Oxygen Therapy</div>
              </div>
              <div className="cardBody">
                <div className="cardDesc">
                  Accelerated wound healing with higher pressure oxygen
                </div>
                <Link to={"/services/hbot"}>
                  <div className="ctaBtn">Learn More</div>
                </Link>
              </div>
            </div>

            <div className="serviceCard">
              <div className="cardHeader">
                <div className="headerIcon">
                  <img src={bandaid} alt="" />
                </div>
                <div className="headerTitle">Advanced Wound Care</div>
              </div>
              <div className="cardBody">
                <div className="cardDesc">
                  Comprehensive treatment for chronic wounds
                </div>
                <Link to={"/services/woundcare"}>
                  <div className="ctaBtn">Learn More</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="homeSection aboutUs">
          <div className="aboutUsImage">
            <img src={henry} alt="" />
          </div>
          <div className="aboutUsBody">
            <div className="homeSectionHeader">About Us</div>
            <div className="aboutUsText">
              At Ejere Wound Care, we provide compassionate, personalized
              treatment for chronic wounds in Parker County and surrounding
              communities. Led by Dr. Henry Ejere, our team uses advanced care
              like hyperbaric oxygen therapy to achieve a 95%+ healing rate —
              treating every patient like family.
            </div>
            <Link to={"/about"}>
              <div className="ctaBtn">More about Us</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
