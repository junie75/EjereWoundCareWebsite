import React from "react";
import Layout from "./Layout";
import Illustration from "./assets/hbotIllustrationv3.png";

export default function WoundCare() {
  return (
    <Layout>
      <div className="pageContainer">
        <div className="intro">
          <div className="title">Wound Care</div>
          <p>
            Advanced Wound Care provides specialized treatment for chronic or
            non-healing wounds, which are defined as sores or wounds that have
            not significantly healed during the course of conventional
            treatment. <br />
            <br />
            Whether you have a complex soft tissue wound or a vascular ulcer,
            the multidisciplinary team of specially trained clinicians provide
            advanced wound care treatment.
          </p>
        </div>
        <div className="listContainer">
          <div className="list">
            <h2>We specialize in:</h2>
            <ul>
              <li>Hyperbaric oxygen therapy</li>
              <li>Biological skin substitutes</li>
              <li>Bi-layer compression</li>
              <li>Negative pressure therapy</li>
              <li>Surgical and sharp debridement</li>
              <li>Transcutaneous Oxygen Mapping</li>
              <li>Advanced dressings</li>
              <li>Total contact casting</li>
            </ul>
          </div>
          <div className="list">
            <h2>Conditions Treated:</h2>
            <ul>
              <li>Chronic, non-healing wounds</li>
              <li>Diabetic foot/leg ulcers</li>
              <li>Decubitus ulcers (pressure ulcers, bedsores)</li>
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
              <li>Debridement</li>
              <li>Negative pressure wound therapy</li>
              <li>Bioengineered skin substitutes</li>
              <li>Laboratory studies</li>
              <li>Hyperbaric oxygen therapy</li>
              <li>Radiologic imaging and vascular studies</li>
              <li>Education on wound care and prevention</li>
              <li>Referral to other specialists as needed</li>
            </ul>
          </div>
        </div>
        <div className="hbotAd">
          <div className="text">
            <h3 className="crimson-pro-reg">Hyperbaric Medicine</h3>
            <p className="crimson-pro-reg">
              In some instances, the use of hyperbaric oxygen therapy may be
              needed as part of a patients individualized treatment plan.
            </p>
            <div className="ctaBtn crimson-pro-reg">Learn More</div>
          </div>
          <div className="image">
            <img src={Illustration} alt="HBOTimage" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
