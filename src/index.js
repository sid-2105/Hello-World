import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import Layout from "./Components/Layout/Layout";
import Contact from "./Pages/Contact.jsx";
import Community from "./Pages/Community.jsx";
import Gallery from "./Pages/Gallery.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/community",
        element:<Community/>,
      },
      {
        path:"/gallery",
        element:<Gallery/>
      }
    
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
