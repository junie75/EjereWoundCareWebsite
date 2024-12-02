//Component to display information about Hyperbaric Oxygen Therapy services

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
              When experiencing challenges in reaching your wound care goals,
              seeking additional support can make a significant difference,
              especially if you're uncertain about the factors affecting your
              healing process. Some diagnosis qualify for HBO therapy. For
              decades, hyperbaric oxygen (HBO) has often been part of the
              treatment of diagnosis such as osteoradionecrosis, soft tissue
              radionecrosis, osteomyelitis, diabetic foot ulcers and more!
            </p>
          </div>
          <div className="desc hbot">
            <h2> Benefits of HBOT </h2>
            <p>
              Many health conditions and injuries struggle to heal effectively
              when oxygen levels are insufficient. Factors such as diminished
              blood flow, swelling, and inflammation can create conditions where
              the necessary oxygen for tissue repair is scarce.
              <br /> <br />
              Using a pressurized chamber to deliver oxygen can vastly improve
              the situation, providing 10 to 15 times more oxygen than would be
              available at normal atmospheric pressure. Hyperbaric Oxygen
              Therapy (HBOT) facilitates the absorption of oxygen into various
              bodily fluids, including plasma, lymphatic fluid, and
              cerebrospinal fluid surrounding the brain and spinal cord. This
              increased oxygen supply can penetrate areas with limited or
              obstructed circulation, either by bypassing blockages or directly
              reaching the affected tissues. Enhanced oxygen levels assist in
              the healing process by strengthening the immune response,
              fostering the development of new capillaries, and supporting the
              formation of new connective tissue.
            </p>
          </div>
          <div className="desc hbot">
            <h2>Insurance Covered Indications</h2>
            <ol>
              <li>Gas Gangrene</li>
              <li>
                Acute Traumatic Peripheral Ischemia
                <ul>
                  <li>
                    HBOT is a valuable adjunctive treatment to be used in
                    combination with accepted standard therapeutic measures when
                    loss of function, limb, or life is threatened.
                  </li>
                </ul>
              </li>
              <li>
                Crush Injury and Suturing Severed Limbs
                <ul>
                  <li>
                    HBOT would be an adjunctive treatment when loss of function,
                    limb, or life is threatened.
                  </li>
                </ul>
              </li>
              <li>
                Progressive Necrotizing Infection
                <ul>
                  <li>(e.g., Necrotizing Fasciitis)</li>
                </ul>
              </li>
              <li>Acute Peripheral Arterial Insufficiency</li>
              <li>
                Preparation and Preservation of Compromised Skin Grafts
                <ul>
                  <li>(Not for primary management of wounds)</li>
                </ul>
              </li>
              <li>
                Chronic Refractory Osteomyelitis
                <ul>
                  <li>
                    (Unresponsive to conventional medical and surgical
                    management)
                  </li>
                </ul>
              </li>
              <li>
                Osteoradionecrosis
                <ul>
                  <li>(As an adjunct to conventional treatment)</li>
                </ul>
              </li>
              <li>
                Soft Tissue Radio Necrosis
                <ul>
                  <li>(As an adjunct to conventional treatment)</li>
                </ul>
              </li>
              <li>
                Actinomycosis
                <ul>
                  <li>
                    (Only as an adjunct to conventional therapy when the disease
                    process is refractory to antibiotics and surgical treatment)
                  </li>
                </ul>
              </li>
              <li>
                Diabetic Wounds of the Lower Extremities
                <ul>
                  <li>
                    In patients who meet the following criteria:
                    <ul>
                      <li>
                        Patient has type I or II diabetes and has a lower
                        extremity wound due to diabetes
                      </li>
                      <li>
                        Patient has a wound classified as Wagner Grade III or
                        higher
                      </li>
                      <li>
                        Patient has failed an adequate course of standard wound
                        therapy
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
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
