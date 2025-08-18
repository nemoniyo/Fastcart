import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';
import SignUp from "./pages/signUp";
import LogIn from "./pages/logIn";



export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <SignUp />
        },
        {
          index: true,
          element: <LogIn />
        },
      ]
    }
  ])
  return (<>
    <RouterProvider router={router} />
  </>)
}