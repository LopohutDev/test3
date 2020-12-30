import React from "react";
import Skills from "./layers/Skills";
import "../styles/custom.css";
import { Link } from "react-router-dom";
import Typical from "react-typical";

function Home() {
  return (
    <div className="w-full text-white bg-black text-8xl background">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="flex justify-center text-5xl font-bold p-9 lg:text-8xl">
          <Typical
            steps={["Freelancer.", 1500, "Junior Frontend Developer.", 1500]}
            loop={Infinity}
            wrapper="h1"
          />
        </h1>
        <button className="font-semibold rounded-xl btn2">
          <Link to="/work">Latest Projects</Link>
        </button>
      </div>
      <Skills />
    </div>
  );
}

export default Home;
