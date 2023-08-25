import React from "react";
import { createBrowserRouter as Route } from "react-router-dom";
import App from "../App";

export const router = Route([
  {
    path: "/",
    element: <App />,
  },
]);
