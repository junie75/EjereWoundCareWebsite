import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlogPosts } from "./getBlogPosts";

export default function BlogDetails() {
  const { slug } = useParams();
  const blogs = getBlogPosts();

  const [currentBlog, setCurrentBlog] = useState({});

  useEffect(() => {
    // MARK --> make this make sure that there is a slug that matches, secure errors
    setCurrentBlog(blogs.find((blog) => blog.slug === slug));
  }, [slug]);

  console.log(slug);

  if (currentBlog) console.log(currentBlog);
  return <div>BlogDetails</div>;
}
