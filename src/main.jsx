import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Utilits/Error.jsx";
import SearchBar from "./components/searchbar/SearchBar.jsx";
import ChannelProfile from "./components/channelprofile/ChannelProfile.jsx";
import Feed from "./components/feed/Feed.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchBar />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Feed/>,
      },
    ]
  },
  {
    path: "/channel/:channalCode",
    element: <ChannelProfile />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
