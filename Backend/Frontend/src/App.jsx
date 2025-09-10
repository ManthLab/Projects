import React from "react";
import Navbar from "./components/components_lite/Navbar";

import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/components_lite/Home.jsx";
import PrivacyPolicy from "./components/components_lite/PrivacyPolicy.jsx";
import TermsofService from "./components/components_lite/TermsofService.jsx";
import Jobs from "./components/components_lite/Jobs.jsx";
import Browse from "./components/components_lite/Browse.jsx";
import Profile from "./components/components_lite/Profile.jsx";
import Description from "./components/components_lite/Description.jsx";
import Companies from "./components/components_lite/admincomponent/Companies";
import CompanyCreate from "./components/components_lite/admincomponent/CompanyCreate";
import CompanySetup from "./components/components_lite/admincomponent/CompanySetup";
import AdminJobs from "./components/components_lite/admincomponent/AdminJobs";
import PostJob from "./components/components_lite/admincomponent/PostJob";
import Applicants from "./components/components_lite/admincomponent/Applicants";
import ProtedRoute from "./components/components_lite/admincomponent/ProtectedRoute";
import RecruiterRoute from "./components/components_lite/admincomponent/RecruiterRoute";

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/description/:id",
    element: (
      <ProtedRoute>
        <Description />
      </ProtedRoute>
    ),
  },
  {
    path: "/Profile",
    element: (
      <ProtedRoute>
        <Profile />
      </ProtedRoute>
    ),
  },
  {
    path: "/privacy-policy", // Add route for Privacy Policy
    element: (
      <ProtedRoute>
        <PrivacyPolicy />
      </ProtedRoute>
    ),
  },
  {
    path: "/TermsofService",
    element: (
      <ProtedRoute>
        <TermsofService />
      </ProtedRoute>
    ),
  },
  {
    path: "/Jobs",
    element: (
      <ProtedRoute>
        <Jobs />
      </ProtedRoute>
    ),
  },
  {
    path: "/Home",
    element: (
      <ProtedRoute>
        <Home />
      </ProtedRoute>
    ),
  },
  {
    path: "/Browse",
    element: (
      <ProtedRoute>
        <Browse />
      </ProtedRoute>
    ),
  },

  //admin
  {
    path: "/admin/companies",
    element: (
      <RecruiterRoute>
        <Companies />
      </RecruiterRoute>
    ),
  },

  {
    path: "/admin/companies/create",
    element: (
      <RecruiterRoute>
        <CompanyCreate />
      </RecruiterRoute>
    ),
  },

  {
    path: "/admin/companies/:id",
    element: (
      <RecruiterRoute>
        <CompanySetup />
      </RecruiterRoute>
    ),
  },

  {
    path: "/admin/jobs",
    element: (
      <RecruiterRoute>
        <AdminJobs />
      </RecruiterRoute>
    ),
  },

  {
    path: "/admin/jobs/create",
    element: (
      <RecruiterRoute>
        <PostJob />
      </RecruiterRoute>
    ),
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: (
      <RecruiterRoute>
        <Applicants />
      </RecruiterRoute>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
