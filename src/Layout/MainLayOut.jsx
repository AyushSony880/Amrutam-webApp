import React from "react";
import { Outlet } from "react-router-dom";

function MainLayOut() {
  return (
    <div>
      {/* Content */}
      <Outlet />
    </div>
  );
}

export default MainLayOut;
