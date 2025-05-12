import React, { useState } from "react";
import Layout from "./Layout";
import CloudflarePlayer from "./CloudflarePlayer";
import Spinner from "react-bootstrap/Spinner";
import playButton from "../public/assets/icons8-play-64.png";
import { TailSpin } from "react-loader-spinner";
import VideoCard from "./VideoCard";
import { vids } from "./getMLVids";

export default function MicroLearning() {
  const [activeVideo, setActiveVideo] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const handleVideoClick = (vidId) => {
    setIsLoading(true);
    setActiveVideo(vidId);
  };

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
          {vids.map((vid, index) => (
            <VideoCard
              key={index}
              vid={vid}
              index={index}
              handleVideoClick={handleVideoClick}
              activeVideo={activeVideo}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          ))}
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
