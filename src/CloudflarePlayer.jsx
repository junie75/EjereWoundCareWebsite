import React from "react";
import { Stream } from "@cloudflare/stream-react";

export default function CloudflarePlayer({ videoID }) {
  //   const videoID = "";
  return <Stream controls src={videoID} />;
}
