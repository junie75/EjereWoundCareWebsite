import React from "react";
import Layout from "./Layout";
import thumb1 from "./assets/aboutImg1.jpeg";
import { getBlogPosts } from "./getBlogPosts";
import { Link } from "react-router-dom";

export default function Bloglist() {
  const blogPosts = getBlogPosts();
  console.log(blogPosts);
  return (
    <Layout>
      <div className="pageContainer">
        <div className="bloglistContainer">
          <div className="bloglistBox ">
            {blogPosts
              .sort((a, b) => b.date - a.date)
              .map((blog, index) => {
                return (
                  <div className="blogPreview" key={index}>
                    <Link to={"/blogs/" + blog.slug2}>
                      <div className="blogInfo">
                        <div className="blogTitle">{blog.title}</div>
                        <div className="blogDesc">{blog.description}</div>
                        <div className="blogTags">
                          <div className="blogDate">Nov. 18. 2024</div>
                          <div className="blogCategory">
                            Hyperbaric Oxygen Therapy{" "}
                          </div>
                          <div className="blogReadTime">2 min read</div>
                        </div>
                      </div>
                      <div className="blogThumbnail">
                        <img
                          src={blog.thumbnail.replace("/public", "")}
                          alt="thumbnail"
                          // width={100}
                          // height={200}
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
