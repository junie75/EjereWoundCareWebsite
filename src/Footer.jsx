import React from "react";

const Footer = () => {
  return (
    <div className="footer crimson-pro-reg">
      <div></div>
      <>
        <div className="contact">Contact Us</div>
        <div className="info">
          <ul>
            <li>
              <span className="material-symbols-outlined">location_on</span>
              <p>730 Eureka St, Weatherford, TX 76086</p>
            </li>
            <li>
              <span className="material-symbols-outlined">call</span>
              <p>Phone: 281-713-6543</p>
            </li>
            <li>
              <span className="material-symbols-outlined">fax</span>
              <p>Fax: 713-999-5342</p>
            </li>
            <li>
              <span className="material-symbols-outlined">mail</span>
              <p>Email: info@ejerewoundcare.com</p>
            </li>
          </ul>
        </div>
      </>
    </div>
  );
};

export default Footer;
