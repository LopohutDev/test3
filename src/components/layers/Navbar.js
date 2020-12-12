import React from "react";
import { Link } from "react-router-dom";
import "../../styles/custom.css";
import Logo from "../../images/Logo.png";

function Navbar() {
  return (
    <div>
      <nav className="fixed flex items-center justify-between w-screen h-16 bg-black">
        <div className="mx-2 lg:mx-6">
          <img src={Logo} alt="none" className="w-24 lg:w-48 opacity-90" />
        </div>
        <div className="mx-8 lg:mx-20">
          <button className="btn">
            <Link to="/">Home</Link>
          </button>
          <button className="btn">
            <Link to="/about">About</Link>
          </button>
          <button className="btn">
            <Link to="/work">Work</Link>
          </button>
          <button className="btn">
            <Link to="/contact">Contact</Link>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
