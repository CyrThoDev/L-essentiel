import React from "react";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div className="m-4">
      <Outlet />
    </div>
  );
}

export default UserLayout;
