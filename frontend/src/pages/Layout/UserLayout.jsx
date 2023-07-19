import React from "react";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div className="">
      <Outlet />
    </div>
  );
}

export default UserLayout;
