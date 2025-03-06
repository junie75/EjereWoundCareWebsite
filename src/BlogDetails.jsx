import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogPosts } from "./getBlogPosts";
import Markdown from "react-markdown";
import Layout from "./Layout";
// import { formattedDate } from "./Bloglist";

export default function BlogDetails() {
  const { slug } = useParams(); //pull the slug name from the url
  const blogs = getBlogPosts(); //get list of blogs

  const [currentBlog, setCurrentBlog] = useState({});

  //load correct blog based on
  useEffect(() => {
    // MARK --> make this make sure that there is a slug that matches, secure errors
    setCurrentBlog(blogs.find((blog) => blog.slug === slug));
  }, [slug]);

  console.log(slug);

  return currentBlog ? (
    <Layout>
      <div className="pageContainer">
        <div className="blogDetailsContainer">
          <h1 className="blogPostTitle">{currentBlog.title}</h1>
          <div className="blogTags">
            <div className="blogPostDate">{currentBlog.postDate}</div>
            <div className="blogCategory">Hyperbaric Oxygen Therapy</div>
            <div className="blogReadTime">2 min read</div>
          </div>
          <div className="blogPostBanner">
            <img
              src={currentBlog.thumbnail.replace("/public", "")}
              alt="blog image"
            />
          </div>
          <div className="blogPostDesc">{currentBlog.description}</div>
          <Markdown>{currentBlog.content}</Markdown>
        </div>
      </div>
    </Layout>
  ) : (
    <div>No details available</div>
  );
}
