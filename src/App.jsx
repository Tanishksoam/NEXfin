import React from "react";
import Home from "./pages/home";
import Header from "./components/header";
import "./App.css";
import {
  createBrowserRouter,
  ScrollRestoration,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/Footer";
import PayTable from "./pages/PayTable";
import Client from "./components/client";
import Login from "./pages/Login";
import FileUpload from "./components/FileUpload";
import Profile from "./components/dashboard";
import Pricing from "./components/pricing";
import SignUP from "./pages/Signup";
import { Analytics } from "@vercel/analytics/react";

const Layout = () => {
  return (
    <div className="w-screen h-screen">
      {/* <Header /> */}
      <ScrollRestoration />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/paytable",
        element: <PayTable />,
      },
      {
        path: "/fileupload",
        element: <FileUpload />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/client",
        element: <Client />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUP />,
      },
      {
        path: "/dashboard",
        element: <Profile />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className=" w-screen font-bodyFont">
      <RouterProvider router={Router} />
      <Analytics />
    </div>
  );
};

export default App;
