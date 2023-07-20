import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

function AdminLayout() {
  return (
    <div className=" w-full justify-start flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
