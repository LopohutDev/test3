import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200">
      <h1 className="mb-20 font-bold text-7xl">About Me.</h1>
      <div className="flex max-w-6xl">
        <div className="w-2/3 p-5 mx-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-5xl font-semibold">Louie Jay Q. Sarraga</h2>
          <hr className="h-1 mx-5 border-red-600 my-7" />
          <p className="text-lg font-medium">
            Is a freelance junior front end web developer, and are skillful in
            using HTML, tailwindcss, reactjs and react router.He is skillful in
            using Tailwind CSS and ReactJS and was taught by ALTEV a bootcamp
            located in Makati City.
          </p>
          <button className="w-32 h-10 mt-5 font-semibold border-2 border-black btn3">
            <Link to="/work">Projects</Link>
          </button>
        </div>
        <div className="w-1/4 mx-6 photo"></div>
      </div>
    </div>
  );
}

export default About;
