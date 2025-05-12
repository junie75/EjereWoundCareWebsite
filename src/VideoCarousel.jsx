import React, { useState } from "react";
import VideoCard from "./VideoCard";
import { vids } from "./getMLVids";
import Slideshow from "./Slideshow";

export default function VideoCarousel(width = "calc(40* var(--rem)") {
  const [activeVideo, setActiveVideo] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const handleVideoClick = (vidId) => {
    setIsLoading(true);
    setActiveVideo(vidId);
  };

  const videoArray = vids.map((vid, index) => (
    <div style={{ width: "calc(40* var(--rem)" }}>
      <VideoCard
        key={index}
        vid={vid}
        index={index}
        handleVideoClick={handleVideoClick}
        activeVideo={activeVideo}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  ));

  return <Slideshow array={videoArray} />;
}
