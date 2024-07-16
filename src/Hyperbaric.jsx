import React from "react";
import hbot from "./assets/hbot.jpg";
import Layout from "./Layout";

export default function Hyperbaric() {
  return (
    <Layout>
      <div className="pageContainer">
        <div className="title">Hyperbaric Oxygen Therapy</div>
        <div className="hbotSection">
          <div className="rowSection">
            <img
              src={hbot}
              alt="Hyperbaric Oxygen Therapy"
              className="hbotImage"
            />
            <div className="rowText">
              <p>
                Hyperbaric Oxygen Therapy or “HBOT” is a prescribed treatment
                approved by the FDA and AMA in which a patient breathes 100%
                medical grade oxygen while under increased pressure. During
                treatment the patient can relax by watching a movie, listening
                to music or just rest. It is a non-invasive, safe method of
                administering pure oxygen at greater than atmospheric pressure
                to a patient in order to improve or correct certain conditions
                or to increase recovery speed.
              </p>
            </div>
          </div>
          <div className="desc hbot">
            <p>
              Failing to achieve your targeted wound care outcomes can be
              frustrating and costly, especially if you’re not sure exactly
              what’s stalling your healing process. Some diagnosis qualify for
              HBO therapy. For decades, hyperbaric oxygen (HBO) has often been
              part of the treatment of diagnosis such as osteoradionecrosis,
              soft tissue radionecrosis, osteomyelitis, diabetic foot ulcers and
              more!
            </p>
          </div>
          <div className="desc hbot">
            <h2> Benefits of HBOT </h2>
            <p>
              Many illnesses and injuries fail to heal due to inadequate oxygen
              levels. Reduced blood flow, swelling, and edema or inflammation
              create an environment that lacks the ability to heal from lack of
              oxygen reaching the damaged tissue. Providing oxygen in a
              pressurized chamber allows the delivery of 10-15 times more oxygen
              than if it was delivered at sea level or at normal atmospheric
              pressure. HBOT allows more oxygen into the body under pressure,
              oxygen dissolves into all of the body’s fluids, including the
              plasma, the lymphatic fluids, and the cerebrospinal fluids
              surrounding the brain and spinal cord. These fluids can carry the
              extra oxygen to areas where circulation is poor or blocked, either
              by trickling passed the blockages or by seeping into the affected
              area. This extra oxygen helps in the healing process and enhances
              the white blood cells ability to fight infection. It can promote
              the development of new capillaries, the tiny blood vessels that
              connect arteries to veins. It also helps the body build new
              connective tissue.
            </p>
          </div>
          <div className="listContainer row">
            <div className="list">
              <h2>Insurance covered indications</h2>
              <ul>
                <li>Chronic, non-healing wounds</li>
                <li>Diabetic foot/leg ulcers</li>
                <li>Decubitus ulcers (pressure ulcers, bedsores)</li>
                <li>Burns</li>
                <li>Traumatic wounds</li>
                <li>Surgical wounds</li>
                <li>Wounds caused by infection</li>
                <li>Wounds due to circulatory problems</li>
              </ul>
            </div>
            <div className="list">
              <h2>Non-covered indications</h2>
              <ul>
                <li>Advanced wound dressings</li>
                <li>Debridement</li>
                <li>Hyperbaric oxygen therapy</li>
                <li>Bioengineered skin substitutes</li>
                <li>Negative pressure wound therapy</li>
                <li>Laboratory studies</li>
                <li>Radiologic imaging and vascular studies</li>
              </ul>
            </div>
          </div>
          <div className="desc hbot center">
            <h2>How to get here...</h2>
            <p>
              Have your physician send a referral to our office for an
              evaluation for HBOT with our staff. Fax to 682-268-2137 For
              questions, please call us at 682-582-2989!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
