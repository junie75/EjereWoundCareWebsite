import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import "./index2.css";
import "./layout2.css";
// import { GoogleReviewsProvider } from "./GoogleReviewsContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About.jsx";
import WoundCare from "./WoundCare.jsx";
import Hyperbaric from "./Hyperbaric.jsx";
import Contact from "./Contact.jsx";
import Testimonials from "./Testimonials.jsx";
import NotFound from "./NotFound.jsx";
// import { GoogleMapsProvider } from "./GoogleMapsContext.jsx";

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
    path: "*", // This is a catch-all route
    element: <NotFound />, // This component will be displayed when no other route matches
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <GoogleMapsProvider apiKey={apiKey}>
      <GoogleReviewsProvider> */}
    <RouterProvider router={router} />
    {/* </GoogleReviewsProvider>
    </GoogleMapsProvider> */}
  </React.StrictMode>
);
