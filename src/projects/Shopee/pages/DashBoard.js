import React from "react";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Footer from "../components/Footer";

function DashBoard() {
  return (
    <div className="absolute">
      <Navbar />
      <Body />
      <div className="w-full h-1 bg-red-600 from to-orange-600">
        <p className="hidden">a</p>
      </div>
      <Footer />
    </div>
  );
}

export default DashBoard;
