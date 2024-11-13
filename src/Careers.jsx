import React, { useState } from "react";
import Layout from "./Layout";
// import jobPostings from "./jobPostings.json";
import { getJobPostings } from "./getJobPostings";
import Markdown from "react-markdown";

const JobModal = ({ job, onClose }) => {
  // Utility function to strip markdown syntax
  const stripMarkdown = (markdownText) => {
    return markdownText
      .replace(/!\[.*\]\(.*\)/g, "") // Remove images
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Convert links to text
      .replace(/[#>*_`~\-]/g, "") // Remove markdown characters
      .replace(/\r?\n|\r/g, " ") // Replace line breaks with spaces
      .trim();
  };

  // Convert markdown content to plain text for the description
  const plainTextContent = stripMarkdown(job.content);
  // Define JSON-LD schema data for the job posting

  const schemaData = {
    "@context": "http://schema.org",
    "@type": "JobPosting",
    title: job.jobTitle,
    description: plainTextContent,
    hiringOrganization: {
      "@type": "Organization",
      name: "Ejere Wound Care and Hyperbaric Oxygen Therapy",
      url: "https://ejerewoundcare.com",
      logo: "https://ejerewoundcare.com/assets/RedoneLogoTrans400x118-Z3vkd7aU.png", // Update with actual logo URL
    },
    employmentType: "FULL_TIME" /*job.jobType.toUpperCase(),*/,
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Weatherford", // Update with actual city
        addressRegion: "TX", // Update with actual state
        addressCountry: "US", // Update with actual country
      },
    },
    datePosted: "2024-11-11", // Example date; replace with actual date
    validThrough: "2024-12-31", // Replace with expiration date
    applyLink: job.applyLink,
  };

  return (
    <div className="modal" key={job.jobID}>
      <div className="modalContent">
        <div className="close" onClick={onClose}>
          &times;
        </div>
        <Markdown>{job.content}</Markdown>
        {/* JSON-LD Schema Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </div>
    </div>
  );
};

export default function Careers() {
  const [modalJob, setModalJob] = useState(null);
  const jobPostings = getJobPostings();
  // const jobPostings = [];
  return (
    <Layout>
      <div className="pageContainer">
        <div className="intro">
          <div className="title">Careers</div>
          <p>
            Ejere Wound Care & Hyperbaric Oxygen Therapy is always looking for
            talented individuals to join our team. If you are interested in
            working with us, please send your resume to
            melanie.parker@ejerewoundcare.com .
          </p>
        </div>
        <div className="careersContainer">
          {jobPostings.length === 0 ? (
            <div className="noJobs crimson-pro-reg">
              No job postings at this time
            </div>
          ) : (
            jobPostings.map((post) => (
              <div
                className="job"
                key={post.jobID}
                onClick={() => setModalJob(post)}
              >
                <section>
                  <h2 className="jobTitle crimson-pro-bold">{post.jobTitle}</h2>
                  {/* <a href={post.applyLink} target="_blank"> */}
                  <div
                    className="apply crimson-pro-reg"
                    onClick={() => setModalJob(post)}
                  >
                    <h2>Learn More</h2>

                    <span className="material-symbols-outlined icon-medium">
                      north_east
                    </span>
                  </div>
                  {/* </a> */}
                </section>
                <div className="jobDesc crimson-pro-reg">
                  <p>{post.jobDesc}</p>
                </div>
                <div className="jobCharacteristics">
                  <div className="jobType crimson-pro-reg">{post.jobType}</div>
                  <div className="jobType crimson-pro-reg">
                    {post.jobLocation}
                  </div>
                </div>
              </div>
            ))
          )}
          {modalJob && (
            <JobModal job={modalJob} onClose={() => setModalJob(null)} />
          )}
        </div>
      </div>
    </Layout>
  );
}
