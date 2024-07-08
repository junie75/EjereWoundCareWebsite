import React from "react";
import Layout from "./Layout";
import aboutImg1 from "./assets/aboutImg1.jpeg";
import aboutImg2 from "./assets/aboutImg2.jpg";
import profileJackie from "./assets/profileJackie.JPG";
import profileMelanie from "./assets/profileMelanie.jpg";
import profileJuni from "./assets/profileJuni.jpg";

export default function About() {
  const teamMembers = [
    {
      photo: profileJackie,
      name: "Jacki Morgan, RN-MSN, CHRN, A-IPC",
      role: "Lead Nurse",
      blurb: `Jacki began her nursing career as a licensed vocational nurse in 2012 and has had a passion for wound care since that time. After becoming a registered nurse in 2015, she went on to complete her bachelor’s and master's degrees in nursing and obtained certifications in both hyperbaric oxygen therapy and as an associate infection preventionist.\n\n
                “I take pride in treating our patients physically, but also in addressing the emotional and mental strain these situations have on their lives and that of their families.” `,
      email: "jacki.morgan@ejerewoundcare.com",
      phone: "682-582-2989",
    },
    {
      photo: profileMelanie,
      name: "Melanie Parker, RN-MSN, CHRN",
      role: "Lead Nurse",
      blurb: `Melanie began her nursing career in 2004 as a registered nurse. She holds a Master of Science in nursing and is also certified in hyperbaric oxygen therapy.  She found her calling in wound care and hyperbaric oxygen therapy in 2018.  
            “I am passionate about impacting my patient’s lives by empowering them with the knowledge and support they need to achieve optimal health and quality of life.”`,
      email: "melanie.parker@ejerewoundcare.com",
      phone: "682-582-2989",
    },
    {
      photo: profileJuni,
      name: "Juni Ejere",
      role: "Software Optimization Specialist",
      blurb: `Melanie began her nursing career in 2004 as a registered nurse. She holds a Master of Science in nursing and is also certified in hyperbaric oxygen therapy.  She found her calling in wound care and hyperbaric oxygen therapy in 2018.  
              “I am passionate about impacting my patient’s lives by empowering them with the knowledge and support they need to achieve optimal health and quality of life.”`,
      email: "juni.ejere@ejerewoundcare.com",
      phone: "682-582-2989",
    },
  ];
  return (
    <Layout>
      <div className="aboutPage">
        <div className="aboutSection">
          <div className="title">About Our Clinic</div>
          <div className="content">
            <div className="photos">
              <img src={aboutImg1} alt="aboutImg1" />
              <img src={aboutImg2} alt="aboutImg2" />
            </div>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <br />
              <h2>Mission</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <br />
              <h2>Patient Promise</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="teamSection">
          <div className="title">Meet Our Team</div>
          <div className="teamBoxes">
            {teamMembers.map((member, index) => (
              <div key={index} className="teamMember">
                <div className="memberPic">
                  <img src={member.photo} alt="memberPhoto" />
                </div>

                <div className="info">
                  <div className="name noto-serif-bold">{member.name}</div>
                  <p className="role">{member.role}</p>
                  <p className="blurb crimson-pro-reg">{member.blurb}</p>
                  <div className="email">
                    <span>Email:</span> {member.email}
                  </div>
                  <div className="phone">
                    <span>Phone:</span> {member.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
