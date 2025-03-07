import React, { useRef, useState } from "react";
import Layout from "./Layout";
import thumb1 from "./assets/aboutImg1.jpeg";
import { getBlogPosts } from "./getBlogPosts";
import { Link } from "react-router-dom";
import { color } from "@mui/system";

export default function Bloglist() {
  const blogPosts = getBlogPosts(); //get the array of blog posts

  //for styling the filters when selected
  const filterAllRef = useRef(0);
  const filterWCRef = useRef(0);
  const filterHBOTRef = useRef(0);

  //state to hold the currently selected filter, defaults to all
  const [currentFilter, setCurrentFilter] = useState(filterAllRef);

  //takes the category of the blog and returns a text input and color for the UI
  const convertCategory = (category) => {
    switch (category) {
      case "hbot":
        return { name: "Hyberbaric Oxygen Therapy", color: "pink" };
      case "woundCare":
        return { name: "Wound Care", color: "green" };
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="pageContainer">
        <div className="bloglistContainer">
          <div className="filterCategoryContainer">
            {/* Assign divs to refs in code, add class if it is the currently selected filter */}
            <div
              ref={filterAllRef}
              className={`filterCategory ${
                currentFilter == filterAllRef ? "underline" : ""
              }`}
              // className="filterCategory"
              onClick={() => setCurrentFilter(filterAllRef)}
            >
              All
            </div>
            <div
              className={`filterCategory ${
                currentFilter == filterWCRef ? "underline" : ""
              } green`}
              ref={filterWCRef}
              onClick={() => setCurrentFilter(filterWCRef)}
            >
              Wound Care
            </div>
            <div
              className={`filterCategory ${
                currentFilter == filterHBOTRef ? "underline" : ""
              } pink`}
              ref={filterHBOTRef}
              onClick={() => setCurrentFilter(filterHBOTRef)}
            >
              Hyperbaric Oxygen Therapy
            </div>
          </div>
          <div className="bloglistBox ">
            {blogPosts
              .sort((a, b) => b.date - a.date) //sorts by most recently published
              .filter((blog) => {
                //tracks currentfilter state to only show blogposts that belong to the appropriate filter.
                //defaults to all blog posts if the state is filterAllRef or null
                switch (currentFilter) {
                  // case filterAllRef:
                  //   return true;
                  case filterWCRef:
                    return blog.category == "woundCare";
                  case filterHBOTRef:
                    return blog.category == "hbot";
                  default:
                    return true;
                }
              })
              .map((blog, index) => {
                //returns a component for each blog post
                return (
                  <div className="blogPreview" key={index}>
                    {/* creates a url based on the slug and sends the user to it when clicked */}
                    <Link to={"/blogs/" + blog.slug}>
                      <div className="blogInfo">
                        <div className="blogTitle">{blog.title}</div>
                        <div className="blogDesc">{blog.description}</div>
                        <div className="blogTags">
                          <div className="leftTags">
                            <div className="blogDate">{blog.postDate}</div>
                            <span>•</span>
                            <div className="blogReadTime">
                              {blog.readTime} min read
                            </div>
                          </div>
                          <div className="blogCategoryContainer">
                            {
                              /*Checks if there is a valid category, if so, displays it and styles accordingly*/
                              convertCategory(blog.category) ? (
                                <div
                                  className={`blogCategory ${
                                    convertCategory(blog.category).color
                                  }`}
                                >
                                  {convertCategory(blog.category).name}
                                </div>
                              ) : (
                                <div></div>
                              )
                            }
                          </div>
                        </div>
                      </div>
                      <div className="blogThumbnail">
                        <img src={blog.formattedPath} alt="thumbnail" />
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
