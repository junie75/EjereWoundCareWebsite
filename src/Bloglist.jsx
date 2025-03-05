import React from "react";
import Layout from "./Layout";
import thumb1 from "./assets/aboutImg1.jpeg";
import { getBlogPosts } from "./getBlogPosts";
import { Link } from "react-router-dom";

export default function Bloglist() {
  const blogPosts = getBlogPosts();

  return (
    <Layout>
      <div className="pageContainer">
        <div className="bloglistContainer">
          <div className="bloglistBox ">
            {blogPosts
              .sort((a, b) => b.date - a.date) //sorts by most recently published
              .map((blog, index) => {
                return (
                  <div className="blogPreview" key={index}>
                    <Link to={"/blogs/" + blog.slug}>
                      <div className="blogInfo">
                        <div className="blogTitle">{blog.title}</div>
                        <div className="blogDesc">{blog.description}</div>
                        <div className="blogTags">
                          <div className="blogDate">{blog.postDate}</div>
                          <div className="blogCategory">
                            Hyperbaric Oxygen Therapy
                          </div>
                          <div className="blogReadTime">2 min read</div>
                        </div>
                      </div>
                      <div className="blogThumbnail">
                        <img
                          src={blog.thumbnail.replace("/public", "")}
                          alt="thumbnail"
                        />
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

// export const formattedDate = (date) => {
//   var newDate = new Date();
//   newDate = date;

//   return newDate.toDateString();
// };
