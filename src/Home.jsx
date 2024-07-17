import React from "react";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="homeDiv">
          <div className="noto-serif-bold hugeText">
            Respectful, <br /> Professional, <br />
            Loving Care
          </div>
          <div className="smallerText cormorant-garamond-semibold ">
            For Every Wound, Every Patient, Every Time
          </div>
          <div className="ctaBtn crimson-pro-reg">Request Appointment</div>
        </div>
      </div>
    </Layout>
  );
}
