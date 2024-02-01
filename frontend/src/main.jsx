import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import GameList from "./components/GameList";
import PostGameForm from "./components/PostGameForm";
import Access from "./pages/Access";
import Register from "./components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/game",
    element: <GameList />,
  },
  {
    path: "/post",
    element: <PostGameForm />,
  },
  {
    path: "/access",
    element: <Access />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
