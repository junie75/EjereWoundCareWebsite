//Code for the main entry point of the application

import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import "./index2.css";
import "./layout2.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About.jsx";
import WoundCare from "./WoundCare.jsx";
import Hyperbaric from "./Hyperbaric.jsx";
import Contact from "./Contact.jsx";
import Testimonials from "./Testimonials.jsx";
import NotFound from "./NotFound.jsx";
import PrivacyNotice from "./PrivacyNotice.jsx";
import Careers from "./Careers.jsx";
import Bloglist from "./Bloglist.jsx";
import BlogDetails from "./BlogDetails.jsx";
import MicroLearning from "./MicroLearning.jsx";
import HomeExpanded from "./HomeExpanded.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services/woundcare",
    element: <WoundCare />,
  },
  {
    path: "/services/hbot",
    element: <Hyperbaric />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
  },
  {
    path: "/privacyNotice",
    element: <PrivacyNotice />,
  },
  {
    path: "*", // This is a catch-all route
    element: <NotFound />, // This component will be displayed when no other route matches
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  // {
  //   path: "/blogs",
  //   element: <Bloglist />,
  // },
  // {
  //   path: "/blogs/:slug",
  //   element: <BlogDetails />,
  // },
  // {
  //   path: "/micro-learning",
  //   element: <MicroLearning />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
