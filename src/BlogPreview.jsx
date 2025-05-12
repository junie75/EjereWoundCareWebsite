import React from "react";
import Logo2 from "./assets/RedoneLogoTransBiggestv2.png";
import { Link } from "react-router-dom";

export default function BlogPreview({ blog, index }) {
  return (
    <Link to={"/blogs/" + blog.slug} key={index}>
      <div className="blogPreview" key={index}>
        {/* creates a url based on the slug and sends the user to it when clicked */}
        <div className="blogThumbnail">
          {
            //if there is a featured image -period- use the featured image. otherwise, use the youtube thumbnail
            // default thumbnail structure is https://img.youtube.com/vi/{youtubeID}/{resolution}default.jpg
            // if neither render default image?
            blog.formattedPath ? (
              <img src={blog.formattedPath} alt="thumbnail" />
            ) : blog.youtubeID ? (
              <img
                src={`https://img.youtube.com/vi/${blog.youtubeID}/hqdefault.jpg`}
                // width={480}
                // height={360}
              />
            ) : (
              <img src={Logo2} alt="thumbnail" />
            )
          }
        </div>
        <div className="blogInfo">
          <div className="blogTitle">{blog.title}</div>
          <div className="blogDesc">{blog.description}</div>
          <div className="blogReadMoreBox">
            <div className="blogReadMore">Read More</div>
            <span className="material-symbols-outlined icon-medium blog">
              arrow_forward_ios
            </span>
          </div>
          {/* <div className="blogTags">
        <div className="leftTags">
          <div className="blogDate">{blog.postDate}</div>
          <span>•</span>
          <div className="blogReadTime">
            {blog.readTime} min read
          </div>
        </div>

        <div className="blogCategoryContainer">
          {
            /*Checks if there is a valid category, if so, displays it and styles accordingly/
            instructions ? (
              instructions.map((category, index2) => (
                <div
                  key={index2}
                  className={`blogCategory ${category.color}`}
                >
                  {category.name}
                </div>
              ))
            ) : (
              <div></div>
            )
          }
        </div> 
      </div>*/}
        </div>
      </div>
    </Link>
  );
}
