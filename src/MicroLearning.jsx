import React, { useState } from "react";
import Layout from "./Layout";
import CloudflarePlayer from "./CloudflarePlayer";
import Spinner from "react-bootstrap/Spinner";
import playButton from "../public/assets/icons8-play-64.png";
import { TailSpin } from "react-loader-spinner";

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

  const [activeVideo, setActiveVideo] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const handleVideoClick = (vidId) => {
    setIsLoading(true);
    setActiveVideo(vidId);
  };

  const custSubdomain = "customer-e48qfbpiiu6efycs.cloudflarestream.com";
  return (
    <Layout>
      <div className="pageContainer ml">
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
              <div key={index} className="mlVideoCard">
                <div className="mlVideo">
                  {
                    /* show the thumbnail until the active video is clicked and finished loading*/
                    (activeVideo != vid.videoID || isLoading) && (
                      <div
                        className="dummyPlayer"
                        onClick={() => handleVideoClick(vid.videoID)}
                      >
                        <img
                          src={`https://${custSubdomain}/${vid.videoID}/thumbnails/thumbnail.jpg?time=0s&width=500&height=350`}
                          alt={`thumbnail ${vid.title}`}
                          height={350}
                          width={500}
                          className="mlThumbnail"
                        />
                        {
                          /* show the play button until the video is clicked, then show spinner while it is loading*/
                          activeVideo === vid.videoID && isLoading ? (
                            <TailSpin wrapperClass="spinner" color="white" />
                          ) : (
                            <div className="mlPlayBtn">▶</div>
                          )
                        }
                      </div>
                    )
                  }
                  {
                    /* as soon as the video is clicked load the video player, it will be hidden under thumbnail until the video finishes loading */
                    activeVideo === vid.videoID && (
                      <div className="mlVideoPlayer">
                        <CloudflarePlayer
                          videoID={vid.videoID}
                          autoplay={true}
                          setIsLoading={setIsLoading}
                        />
                      </div>
                    )
                  }
                </div>
                <div className="mlVideoInfo">
                  <div className="mlVideoTitle">{vid.title}</div>
                  <div className="mlVideoDesc">{vid.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* {activeVideo && (
          <div className="mlModal" onClick={() => setActiveVideo(null)}>
            <div className="mlModalContent">
              <button
                className="mlModalCloseBtn"
                onClick={() => setActiveVideo(null)}
              >
                &times;
              </button>
              {/* Render Job content after parsing markdown */}
        {/* <Markdown>{job.content}</Markdown> 
              <CloudflarePlayer
                videoID={activeVideo}
                autoplay={true}
                className="mlVideoPlayer"
              />
            </div>
          </div>
        )} */}
      </div>
    </Layout>
  );
}
