import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer crimson-pro-reg">
      {/* <div></div> */}
      {/* <> */}
      {/* <div className="contact">Contact Us</div> */}
      {/* <div className="info"> */}
      <ul>
        <li>
          <span className="material-symbols-outlined icon-small white">
            location_on
          </span>
          <p>730 Eureka St, Weatherford, TX 76086</p>
        </li>
        <li>
          <span className="material-symbols-outlined icon-small white">
            call
          </span>
          <p>Phone: 682-582-2989</p>
        </li>
        <li>
          <span className="material-symbols-outlined icon-small white">
            fax
          </span>
          <p>Fax: 682-268-2137</p>
        </li>
        <li>
          <span className="material-symbols-outlined icon-small white">
            mail
          </span>
          <p>Email: referrals@ejerewoundcare.com</p>
        </li>
        <li>
          {/* <span className="material-symbols-outlined icon-small white">
            mail
          </span> */}
          <Link to="/privacyNotice">
            <p>Notice of Privacy Practices</p>
          </Link>
        </li>
      </ul>
      {/* </div> */}
      {/* </> */}
    </div>
  );
};

export default Footer;
