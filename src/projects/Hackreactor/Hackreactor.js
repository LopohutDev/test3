import React from "react";
import Body from "./Layers/Body";
import Footer from "./Layers/Footer";
import Navbar from "./Layers/Navbar";
import "./Styles/hackreactor.css";

function Hackreactor() {
  return (
    <div>
      <h1 className="mt-2 text-3xl font-semibold text-center">
        Sample HackReactor.
      </h1>
      <div className="block w-screen m-4 font-sans border-2 border-black">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default Hackreactor;
