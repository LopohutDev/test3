import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-col items-center justify-center w-screen bg-gray-200">
      <h1 className="mt-20 mb-16 text-5xl font-bold lg:text-7xl">About Me.</h1>
      <div className="block max-w-6xl mb-5 lg:hidden">
        <div className="w-64 h-64 photo2"></div>
      </div>
      <div className="flex max-w-6xl">
        <div className="p-5 mx-6 mb-20 bg-white rounded-lg shadow-lg lg:w-2/3">
          <h2 className="text-4xl font-semibold">Louie Jay Q. Sarraga</h2>
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
        <div className="hidden w-1/4 mx-6 mb-20 photo lg:block"></div>
      </div>
    </div>
  );
}

export default About;
