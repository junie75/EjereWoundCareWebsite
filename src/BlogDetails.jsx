import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogPosts } from "./getBlogPosts";
import Markdown from "react-markdown";
import Layout from "./Layout";
// import { formattedDate } from "./Bloglist";

export default function BlogDetails() {
  const { slug } = useParams(); //pull the slug name from the url
  const blogs = getBlogPosts(); //get list of blogs
  var imagePath = "";

  const [currentBlog, setCurrentBlog] = useState({});
  // setCurrentBlog(blogs.find((blog) => blog.slug === slug));

  //load correct blog based on
  useEffect(() => {
    // MARK --> make this make sure that there is a slug that matches, secure errors
    setCurrentBlog(blogs.find((blog) => blog.slug === slug));
  }, [slug]);

  // console.log(slug);

  return currentBlog ? (
    <Layout>
      <div className="pageContainer">
        <div className="blogDetailsContainer">
          <h1 className="blogPostTitle">{currentBlog.title}</h1>
          <div className="blogTags">
            <div className="leftTags">
              <div className="blogPostDate">{currentBlog.postDate}</div>
              <span>•</span>

              <div className="blogReadTime">
                {currentBlog.readTime} min read
              </div>
            </div>
            {/* <div className="blogCategory">Hyperbaric Oxygen Therapy</div> */}
          </div>
          <div className="blogPostDesc">{currentBlog.description}</div>
          <div className="blogPostBanner">
            <img src={currentBlog.formattedPath} alt="blog image" />
          </div>

          <Markdown>{currentBlog.content}</Markdown>
        </div>
      </div>
    </Layout>
  ) : (
    <div>No details available</div>
  );
}
