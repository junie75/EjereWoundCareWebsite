//Home page component with a call to action button

import React from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Layout>
      <div className="homeContainer">
        <div className="homeDiv">
          <div className="noto-serif-bold hugeText">
            Respectful, <br /> Professional, <br />
            Loving Care
          </div>
          <div className="ctaBtn crimson-pro-reg">
            <Link
              to={"https://patientportal.advancedmd.com/127093/onlineintake"}
              target="_blank"
            >
              Request Appointment
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
