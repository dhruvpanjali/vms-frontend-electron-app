import React from "react";
import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"

axios.defaults.baseURL = import.meta.env.VITE_SITE_URL;

const router = createBrowserRouter([
  {
    path: "/",
    // element: <LogoOnlyLayout />,
    children: [
      {
        path: "/",
        element: <LogoOnlyLayout/>,
        children: [{ path: "/", element: <HomePage /> }],
      },
      // {
      //   path: "/register/:role",
      //   element: <RegisterPage />,
      // },
      {
        path: "login",
        element: <LogoOnlyLayout />,
        children: [
          { path: "/login/:role", element: <LoginPage /> },
          // { path: "/careers/job-search", element: <JobSearch/> },
        ],
      },
      // {
      //   path: "/login/:role",
      //   element: <LoginPage />,
      // },
    ],
  },
]);

export default router;
