import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import GameList from "./components/GameList";
import PostGameForm from "./components/PostGameForm";
import Access from "./pages/Access";
import Register from "./components/Register";
import GameById from "./components/GameById";
import EditGame from "./components/EditGame";
import EditorList from "./components/Editor/EditorList";
import EditorById from "./components/Editor/EditorById";
import ModifyEditor from "./components/Editor/ModifyEditor";
import PostEditor from "./components/Editor/PostEditor";

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
    path: "/game/:id",
    element: <GameById />,
    path: "/editor",
    element: <EditorList />,
  },
  {
    path: "/editor/:id",
    element: <EditorById />,
  },
  {
    path: "/editor/:id/modify",
    element: <ModifyEditor />,
  },
  {
    path: "/editor/post",
    element: <PostEditor />,
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
  {
    path: "/game/edit/:id",
    element: <EditGame />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
