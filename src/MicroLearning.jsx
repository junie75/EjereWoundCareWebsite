import React from "react";
import Layout from "./Layout";
import CloudflarePlayer from "./CloudflarePlayer";

export default function MicroLearning() {
  const vids = [
    {
      title: "Try this productivity technique",
      desc: "Boost your efficiency with this simple method",
      videoID: "99c24780e72348ddacb2c67c4674fd06",
    },
    {
      title: "A helpful design tip",
      desc: "Improve your layouts with this easy trick",
      videoID: "21bb97c39e78498e47543ee408b15ddc",
    },
    {
      title: "How to chop an onion",
      desc: "Learn a quick and safe chopping technique",
      videoID: "67c327842b2c4268d3873afe98046d23",
    },
    {
      title: "Tips for better communication",
      desc: "Enhance your skills with these practical tips",
      videoID: "99c24780e72348ddacb2c67c4674fd06",
    },
  ];
  return (
    <Layout>
      <div className="pageContainer">
        <div className="intro">
          <div className="title">MICRO-LEARNING</div>
          <p>
            Browse our collection of short-form educational videos on wound
            care, hyperbaric oxygen therapy, recovery, and prevention.
          </p>
        </div>
        <div className="mlGridContainer">
          {vids.map((vid, index) => {
            return (
              <div key={index} className="mlVideo">
                <CloudflarePlayer
                  videoID={vid.videoID}
                  className="mlVideoPlayer"
                />
                <div className="mlVideoInfo">
                  <div className="mlVideoTitle">{vid.title}</div>
                  <div className="mlVideoDesc">{vid.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
