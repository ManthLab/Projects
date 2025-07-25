
import React from 'react'
import Navbar from './components/components_lite/Navbar';

import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/components_lite/Home.jsx';
import PrivacyPolicy from './components/components_lite/PrivacyPolicy.jsx';
import TermsofService from './components/components_lite/TermsofService.jsx';
import Jobs from './components/components_lite/Jobs.jsx';
import Browse from './components/components_lite/Browse.jsx';
import Profile from './components/components_lite/Profile.jsx';
import Description from './components/components_lite/Description.jsx';
import Companies from './components/components_lite/admincomponent/Companies';
import CompanyCreate from './components/components_lite/admincomponent/CompanyCreate';



const appRouter  = createBrowserRouter([
  { path:"/",
    element: <Home />,
  },
  {
    path:"/login",
    element: <Login />,
  },
  {
    path:"/register",
    element: <Register />,
  },
  {
    path: "/description/:id",
    element: <Description />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path:"/privacy-policy",  // Add route for Privacy Policy
    element: <PrivacyPolicy />,
  },
  {
    path:"/TermsofService",
    element: <TermsofService />,
  },
  {
    path: "/Jobs",
    element: <Jobs />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Browse",
    element: <Browse />,
  },

  //admin 
  {
    path: "/admin/companies",
    element: <Companies />,
  },

  {
    path: "/admin/companies/create",
    element: <CompanyCreate />,
  }
]);

const App = () => {
  return (
    
      <RouterProvider router = {appRouter} />
    
  );
}

export default App;