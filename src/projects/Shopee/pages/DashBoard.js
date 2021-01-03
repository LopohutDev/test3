import React from "react";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Footer from "../components/Footer";

function DashBoard() {
  return (
    <div className="w-full shopeeheight">
      <h1 className="mt-2 text-3xl font-semibold text-center">
        Sample Shopee.
      </h1>
      <div className="absolute m-4 border-2 border-black">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default DashBoard;
