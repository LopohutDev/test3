import React from "react";
import { Link } from "react-router-dom";
import "../../styles/custom.css";
import Logo from "../../images/Logo.png";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between w-screen h-16 bg-black">
        <div className="mx-6 sm:mx-2">
          <img src={Logo} alt="none" className="w-48 opacity-90" />
        </div>
        <div className="mx-6">
          <button className="btn btn-5">
            <Link to="/">Home</Link>
          </button>
          <button className="btn btn-5">
            <Link to="/about">About</Link>
          </button>
          <button className="btn btn-5">
            <Link to="/work">Work</Link>
          </button>
          <button className="btn btn-5">
            <Link to="/contact">Contact</Link>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
