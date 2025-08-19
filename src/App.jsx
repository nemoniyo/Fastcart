import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';
import SignUp from "./pages/signUp";
import LogIn from "./pages/logIn";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          path: "signIn",
          element: <SignUp />
        },
        {
          path: "logIn",
          element: <LogIn />
        },
        {
          index: true,
          path: "home",
          element: <Home />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "wishlist",
          element: <Wishlist />
        },
        {
          path: "cart",
          element: <Cart />
        },
      ]
    }
  ])
  return (<>
    <RouterProvider router={router} />
  </>)
}