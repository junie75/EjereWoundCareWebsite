import React from "react";
import Layout from "./Layout";
import thumb1 from "./assets/aboutImg1.jpeg";
import { getBlogPosts } from "./getBlogPosts";

export default function Bloglist() {
  const blogPosts = getBlogPosts();
  console.log(blogPosts);
  return (
    <Layout>
      <div className="bloglistContainer">
        <div className="bloglistBox">
          <div className="blogPreview">
            <div className="blogInfo">
              <div className="blogTitle">
                Oxygen Toxicity in HBOT: The Importance of Individualized
                Treatment
              </div>
              <div className="blogDesc">
                This extra oxygen helps in the healing process and enhances the
                white blood cells ability to fight infection. It...
              </div>
              <div className="blogTags">
                <div className="blogDate">Nov 18. 2024</div>
                <div className="blogCategory">Hyperbaric Oxygen Therapy </div>
                <div className="blogReadTime">2 min read</div>
              </div>
            </div>
            <div className="blogThumbnail">
              <img src={thumb1} alt="thumbnail" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
