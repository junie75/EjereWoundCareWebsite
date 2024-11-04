import React, { useState } from "react";
import Layout from "./Layout";
// import jobPostings from "./jobPostings.json";
import { getJobPostings } from "./getJobPostings";
import Markdown from "react-markdown";

const JobModal = ({ job, onClose }) => {
  return (
    <div className="modal" key={job.jobID}>
      <div className="modalContent">
        <div className="close" onClick={onClose}>
          &times;
        </div>
        <Markdown>{job.content}</Markdown>
      </div>
    </div>
  );
};

export default function Careers() {
  const [modalJob, setModalJob] = useState(null);
  const jobPostings = getJobPostings();
  return (
    <Layout>
      <div className="pageContainer">
        <div className="intro">
          <div className="title">Careers</div>
          <p>
            Ejere Wound Care & Hyperbaric Oxygen Therapy is always looking for
            talented individuals to join our team. If you are interested in
            working with us, please send your resume to
            careers@ejerewoundcare.com .
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
