import React from "react";
import Layout from "./Layout";
import map from "./assets/map.jpg";

export default function Contact() {
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
                    <p>Phone: 281-713-6543</p>
                  </div>
                  <div className="iconBox">
                    <span className="material-symbols-outlined icon-medium">
                      fax
                    </span>
                    <p>Fax: 713-999-5342</p>
                  </div>
                  <div className="iconBox">
                    <span className="material-symbols-outlined icon-medium">
                      mail
                    </span>
                    <p>Email: info@ejerewoundcare.com</p>
                  </div>
                </div>
              </div>
              <div className="desc hbot">
                <h2>Hours</h2>
                <div>
                  <p>Monday - Friday: 8:00am - 5:00pm</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
            <img src={map} alt="map" />
          </div>
        </div>
      </div>
    </Layout>
  );
}