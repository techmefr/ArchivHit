import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import GameList from "./components/GameList";
import PostGameForm from "./components/PostGameForm";
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
