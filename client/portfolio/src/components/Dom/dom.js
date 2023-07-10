import React from "react";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import { SendMail } from "../SendEmail/sendEmail";
import App from "../../App";
import { Root } from "../Root/root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/home", element: <App /> }],
  },
]);

export const Dom = () => {
  return (
    <>
      <RouterProvider router={router}>
        <Routes />
      </RouterProvider>
    </>
  );
};
