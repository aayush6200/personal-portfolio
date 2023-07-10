import React from "react";
import NavBar from "../Nav/nav";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
