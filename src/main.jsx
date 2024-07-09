import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import "./index.css";
import "./layout.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About.jsx";
import WoundCare from "./WoundCare.jsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
