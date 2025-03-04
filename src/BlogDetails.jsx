import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { slug } = useParams();

  console.log(slug);
  return <div>BlogDetails</div>;
}
