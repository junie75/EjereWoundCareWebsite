//Component to display job postings and job details

import React, { useState } from "react";
import Layout from "./Layout";
import { getJobPostings } from "./getJobPostings";
import Markdown from "react-markdown";

// Modal component to display job details
const JobModal = ({ job, onClose }) => {
  return (
    <div className="modal" key={job.jobID}>
      <div className="modalContent">
        <div className="close" onClick={onClose}>
          &times;
        </div>
        {/* Render Job content after parsing markdown */}
        <Markdown>{job.content}</Markdown>
      </div>
    </div>
  );
};

export default function Careers() {
  const [modalJob, setModalJob] = useState(null); // State to manage the modal
  const jobPostings = getJobPostings(); // Get job postings from the getJobPostings function

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
  // const plainTextContent = stripMarkdown(job.content);
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
          {
            // If there are no job postings, display a message else display the job postings
            jobPostings.length === 0 ? (
              <div className="noJobs crimson-pro-reg">
                No job postings at this time
              </div>
            ) : (
              jobPostings.map((post) => {
                const plainTextContent = stripMarkdown(post.content);
                const schemaData = {
                  "@context": "http://schema.org",
                  "@type": "JobPosting",
                  title: post.jobTitle,
                  description: plainTextContent,
                  hiringOrganization: {
                    "@type": "Organization",
                    name: "Ejere Wound Care and Hyperbaric Oxygen Therapy",
                    url: "https://ejerewoundcare.com",
                    logo: "https://www.ejerewoundcare.com/assets/RedoneLogoTrans400x118-Z3vkd7aU.png",
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "730 E Eureka St.",
                      addressLocality: "Weatherford",
                      addressRegion: "TX",
                      postalCode: "76087",
                      addressCountry: "US",
                    },
                  },
                  employmentType: "FULL-TIME" /*job.jobType.toUpperCase(),*/,
                  jobLocation: {
                    "@type": "Place",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Weatherford",
                      addressRegion: "TX",
                      addressCountry: "US",
                      postalCode: "76086",
                    },
                  },
                  datePosted: "2024-11-11",
                  validThrough: "2024-12-31", //expiration date
                  applyLink: post.applyLink,
                };
                return (
                  <div
                    className="job"
                    key={post.jobID}
                    onClick={() => setModalJob(post)} // Open the modal when a job is clicked
                  >
                    <section>
                      <h2 className="jobTitle crimson-pro-bold">
                        {post.jobTitle}
                      </h2>
                      <div
                        className="apply crimson-pro-reg"
                        onClick={() => setModalJob(post)}
                      >
                        <h2>Learn More</h2>

                        <span className="material-symbols-outlined icon-medium">
                          north_east
                        </span>
                      </div>
                    </section>
                    <div className="jobDesc crimson-pro-reg">
                      <p>{post.jobDesc}</p>
                    </div>
                    <div className="jobCharacteristics">
                      <div className="jobType crimson-pro-reg">
                        {post.jobType}
                      </div>
                      <div className="jobType crimson-pro-reg">
                        {post.jobLocation}
                      </div>
                    </div>
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaData),
                      }}
                    />
                  </div>
                );
              })
            )
          }
          {
            // If a job is clicked, display the modal
            modalJob && (
              <JobModal job={modalJob} onClose={() => setModalJob(null)} />
            )
          }
        </div>
      </div>
    </Layout>
  );
}
