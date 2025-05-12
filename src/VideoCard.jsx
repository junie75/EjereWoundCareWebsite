import React from "react";
import CloudflarePlayer from "./CloudflarePlayer";
import { TailSpin } from "react-loader-spinner";

export default function VideoCard({
  vid,
  index,
  handleVideoClick,
  activeVideo,
  isLoading,
  setIsLoading,
}) {
  const custSubdomain = "customer-e48qfbpiiu6efycs.cloudflarestream.com";

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
}
