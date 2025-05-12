import React from "react";
import { getBlogPosts } from "./getBlogPosts";
import BlogPreview from "./BlogPreview";
import Slideshow from "./Slideshow";

export default function BlogCarousel() {
  const blogPosts = getBlogPosts();

  const blogArray = blogPosts
    .slice(0, 5) //only display the first 5
    .map((blog, index) => (
      <div style={{ width: "calc(30* var(--rem))" }}>
        <BlogPreview blog={blog} index={index} />
      </div>
    ));

  return <Slideshow array={blogArray} />;
}
