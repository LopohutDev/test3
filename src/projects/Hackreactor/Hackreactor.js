import React from "react";
import Body from "./Layers/Body";
import Footer from "./Layers/Footer";
import Navbar from "./Layers/Navbar";
import "./Styles/hackreactor.css";

function Hackreactor() {
  return (
    <div className="block w-screen font-sans ">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default Hackreactor;
