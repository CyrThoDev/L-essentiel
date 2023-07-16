import React from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      AdminLayout
      <Outlet />
    </div>
  );
}

export default AdminLayout;
