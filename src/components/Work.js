import React from "react";
import "../styles/custom.css";

function Work() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
        <h1 className="my-20 text-6xl font-bold text-center lg:text-left">
          My Recent Works.
        </h1>
        <div className="w-full ">
          <div className="flex flex-wrap mb-32 justify-evenly">
            <div className="w-64 h-64 bg-red-500 shopee blur"></div>
            <div className="w-64 h-64 bg-blue-500 hackreact blur"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
