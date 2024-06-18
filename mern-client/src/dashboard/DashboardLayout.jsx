import React from "react";
import { Outlet } from "react-router-dom";
import MySidebar from "./MySidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-full">
      <MySidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
