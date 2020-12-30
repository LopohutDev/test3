import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
function DashBoard() {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col-reverse lg:flex-row">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default DashBoard;
