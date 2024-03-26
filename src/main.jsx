import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import Users from "./Components/Users/Users";
import Posts from "./Components/Posts/Posts";
import PostDetails from "./Components/PostDetails/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Blog></Blog>,
      },
      {
        path: "/user/:userId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
        element: <Users></Users>,
      },
      {
        path: "/posts",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>,
      },
      {
        path: "/post/:postId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
