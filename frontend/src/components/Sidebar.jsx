import React from "react";

function Sidebar() {
  return (
    <>
      <div>Sidebar</div>
      <div className="flex">
        <div className="w-1/4 bg-gray-200 h-screen">
          Sidebar content goes here
        </div>
        <div className="w-3/4 p-4">Main content goes here</div>
      </div>
    </>
  );
}

export default Sidebar;
