//Component to display information about wound care services

import React from "react";
import Layout from "./Layout";
import Illustration from "./assets/hbotIllustrationv4.png";

export default function WoundCare() {
  return (
    <Layout>
      <div className="pageContainer">
        <div className="intro">
          <div className="title">Wound Care</div>
          <p>
            Ejere Wound Care & Hyperbaric Oxygen Therapy specializes in treating
            chronic or complicated wounds that haven’t healed with conventional
            methods, providing advanced care for complex soft tissue wounds and
            vascular ulcers while collaborating with other specialists to ensure
            comprehensive treatment.
          </p>
        </div>
        <div className="listContainer">
          <div className="list">
            <h2>Conditions Treated:</h2>
            <ul>
              <li>Chronic, non-healing wounds</li>
              <li>Diabetic foot/leg ulcers</li>
              <li>Pressure injuries</li>
              <li>Burns</li>
              <li>Traumatic wounds</li>
              <li>Surgical wounds</li>
              <li>Infected wounds</li>
              <li>Wounds with exposed tendon, bone, or hardware</li>
              <li>Wounds due to circulatory problems</li>
              <li>Wounds with excessive drainage</li>
            </ul>
          </div>
          <div className="list">
            <h2>Your treatment plan may include: </h2>
            <ul>
              <li>Advanced wound dressings</li>
              <li> Wound debridement</li>
              <li>Negative pressure wound therapy</li>
              <li>Hyperbaric oxygen therapy</li>
              <li>Bioengineered skin substitute grafts</li>
              <li>Bi-layer compression therapy</li>
              <li>Negative pressure therapy</li>
              <li>Transcutaneous Oxygen Mapping</li>
              <li>Total contact casting</li>
              <li>Referral for radiologic imaging</li>
              <li>Vascular studies</li>
              <li>Education on wound care and prevention</li>
              <li>Referral to other specialists as needed</li>
            </ul>
          </div>
        </div>
        <div className="hbotAd">
          <div className="text">
            <h3 className="crimson-pro-reg">Hyperbaric Medicine</h3>
            <p className="crimson-pro-reg">
              For some patients, hyperbaric oxygen therapy may be necessary as a
              component of their individualized treatment plan.
            </p>
            <a href="/services/hbot" style={{ textDecoration: "none" }}>
              <div className="ctaBtn crimson-pro-reg">Learn More</div>
            </a>
          </div>
          <div className="image">
            <img src={Illustration} alt="HBOTimage" width={602} height={322} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
