import React from "react";
import { Stream } from "@cloudflare/stream-react";

export default function CloudflarePlayer({ videoID, autoplay }) {
  //   const videoID = "";
  return <Stream controls src={videoID} autoplay={autoplay} />;
}
