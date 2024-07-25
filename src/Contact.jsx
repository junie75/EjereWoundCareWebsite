import React from "react";
import Layout from "./Layout";
// import map from "./assets/map.jpg";

// import Map from "./Map";
// import { useGoogleReviews } from "./GoogleReviewsContext";

export default function Contact() {
  // const { apiKey } = useGoogleReviews();
  return (
    <Layout>
      <div className="pageContainer">
        <div className="contactSections">
          <div className="title">Contact Us</div>
          <div className="contactSection">
            <div className="contactInfo">
              <div className="desc hbot">
                <h2>Location</h2>
                <div className="iconBox">
                  <span className="material-symbols-outlined icon-medium">
                    location_on
                  </span>
                  <p>730 Eureka St, Weatherford, TX 76086</p>
                </div>
              </div>
              <div className="desc hbot">
                <h2>Contact information</h2>
                <div>
                  <div className="iconBox">
                    <span className="material-symbols-outlined icon-medium">
                      call
                    </span>
                    <p>Phone: 682-582-2989</p>
                  </div>
                  <div className="iconBox">
                    <span className="material-symbols-outlined icon-medium">
                      fax
                    </span>
                    <p>Fax: 682-268-2137</p>
                  </div>
                  <div className="iconBox">
                    <span className="material-symbols-outlined icon-medium">
                      mail
                    </span>
                    <p>Email: referrals@ejerewoundcare.com</p>
                  </div>
                </div>
              </div>
              <div className="desc hbot">
                <h2>Hours</h2>
                <div>
                  <p>Monday - Friday: 8:00am - 4:00pm</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13421.814898951037!2d-97.8009101!3d32.7536933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8651fe01ca900001%3A0x692cf2460a449f68!2sEjere%20Wound%20Care%20and%20Hyperbaric%20Oxygen%20Therapy!5e0!3m2!1sen!2sus!4v1721925132083!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="mapContainer"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <div className="mapContainer"> */}
            {/* <Map /> */}
            {/* </div> */}
            {/* <img src={map} alt="map" /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
