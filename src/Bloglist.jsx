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
    var categoryArr = []; //empty arr to hold categories
    var instructions = []; //arr of objects to tell code what to display

    //determine wether it is a single or multiple category and add to one array
    if (typeof category === "string")
      categoryArr.push(category); //append string to array
    else if (typeof category === "object") {
      //multiple category appears as object
      //iterate over object to get values and append to array as strings
      for (const word in category) {
        categoryArr.push(category[word]);
      }
    }

    //iterate through categories, return an array containing instructions on what to present
    for (const cat of categoryArr) {
      if (cat === "hbot") {
        instructions.push({ name: "Hyperbaric Oxygen Therapy", color: "pink" });
      } else if (cat === "woundCare") {
        instructions.push({ name: "Wound Care", color: "green" });
      }
    }

    console.log(instructions);
    return instructions;
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
                  case filterWCRef:
                    let foundWC = convertCategory(blog.category).find(
                      //within instructions array, looks for category w/ name wound care
                      (obj) => obj.name == "Wound Care"
                    );
                    return foundWC != undefined;
                  case filterHBOTRef:
                    let foundHBOT = convertCategory(blog.category).find(
                      //within instructions array, looks for category w/ name hbot
                      (obj) => obj.name == "Hyperbaric Oxygen Therapy"
                    );
                    return foundHBOT != undefined;
                  default:
                    return true;
                }
              })
              .map((blog, index) => {
                var instructions = convertCategory(blog.category); //convert either string or object value into array of instructions for styling of categories
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
