// Desc: Footer component for the website
import React from "react";
// import { Link } from "react-router-dom";
import Logo2 from "./assets/RedoneLogoTrans400x118.png";
import instagram from "../public/assets/instagramIcon.svg";
import facebook from "../public/assets/facebookIcon.svg";
import tiktok from "../public/assets/tiktokIcon.svg";
import footerLogo from "../public/assets/whiteLogo.svg";

const Footer = () => {
  return (
    <div className="footer crimson-pro-reg">
      {/* <ul>
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
          <Link to="/privacyNotice">
            <p>Notice of Privacy Practices</p>
          </Link>
        </li>
      </ul> */}
      <div className="footerTop">
        <div className="footerNameAddy">
          <p>
            <b>Ejere Wound Care & Hyperbaric Oxygen Therapy</b>
            <br />
            730 East Eureka Street
            <br />
            Weatherford,TX 76086
          </p>
        </div>
        <div className="footerSocialMedia">
          <a
            href="https://www.instagram.com/ejerewoundcare/"
            target="_blank"
            className="footerSocialMediaIcon"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/ejerewoundcare"
            target="_blank"
            className="footerSocialMediaIcon"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.tiktok.com/@ejerewoundcare"
            target="_blank"
            className="footerSocialMediaIcon"
          >
            <img src={tiktok} alt="TikTok" />
          </a>
        </div>
        <div className="footerContactInfo">
          <ul>
            <li>
              <span className="material-symbols-outlined icon-medium white">
                call
              </span>
              <p>Phone: 682-582-2989</p>
            </li>
            <li>
              <span className="material-symbols-outlined icon-medium white">
                fax
              </span>
              <p>Fax: 682-268-2137</p>
            </li>
            <li>
              <span className="material-symbols-outlined icon-medium white">
                mail
              </span>
              <p>Email: referrals@ejerewoundcare.com</p>
            </li>
          </ul>
        </div>
        {/* <div className="footerPatientPortal">
          <Link
            to="https://pp-wfe-100.advancedmd.com/127093/account/logon"
            target="_blank"
            className="navbar-item portal"
          >
            Patient Portal
          </Link>
        </div> */}
      </div>
      <div className="footerBottom">
        <p className="footerCopyRight">
          &copy; 2024 Ejere Wound Care & Hyperbaric Oxygen Therapy
        </p>
        {/* <div className="footerSocialMedia">
          <a
            href="https://www.instagram.com/ejerewoundcare/"
            target="_blank"
            className="footerSocialMediaIcon"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/ejerewoundcare"
            target="_blank"
            className="footerSocialMediaIcon"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.tiktok.com/@ejerewoundcare"
            target="_blank"
            className="footerSocialMediaIcon"
          >
            <img src={tiktok} alt="TikTok" />
          </a>
        </div>
        <div className="footerPrivacyPractices">
          <div className="footerLinkBox">
            <Link to="/privacyNotice">
              <p>Home</p>
            </Link>
            <Link to="/privacyNotice">
              <p>About</p>
            </Link>
            <Link to="/privacyNotice">
              <p>Wound Care Services</p>
            </Link>
            <Link to="/privacyNotice">
              <p>Hyperbaric Services</p>
            </Link>
            <Link to="/privacyNotice">
              <p>Contact</p>
            </Link>
            <Link to="/privacyNotice">
              <p>Careers</p>
            </Link>
            <Link to="/privacyNotice">
              <p>Testimonials</p>
            </Link>
            <Link to="/privacyNotice">
              <p>Notice of Privacy Practices</p>
            </Link>
          </div>
        </div>
        {/* <div className="footerLogo">
          <img
            src={footerLogo}
            alt="Logo"
            className="logo"
            // width="400"
            // height="118"
          />
        </div> *}*/}
      </div>
    </div>
  );
};

export default Footer;
