import React, { useState } from "react";
import Fade from "react-reveal/Fade";

function GetInTouch() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-32 p-5 mt-10">
        <h1 className="text-4xl font-bold lg:text-6xl">GET IN TOUCH.</h1>
        <p className="text-center text-gray-400">
          Please fill out the form to send me a message. or you can contact me
          using <br /> the details above.
        </p>
      </div>
      <div className="max-w-sm p-10 mx-auto mt-5 lg:mt-20 lg:max-w-6xl">
        <div className="block text-xs lg:flex lg:h-12 lg:justify-between">
          <input
            className="w-full p-3 my-2 bg-black border border-gray-500 rounded-xl lg:mr-4 lg:w-1/3 opacity-60 input"
            placeholder="Name"
          />
          <input
            className="w-full p-3 my-2 bg-black border border-gray-500 rounded-xl lg:mx-4 lg:w-1/3 opacity-60 input"
            placeholder="Email Address"
          />
          <input
            className="w-full p-3 my-2 bg-black border border-gray-500 rounded-xl lg:ml-4 lg:w-1/3 opacity-60 input"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <input
            placeholder="Subject"
            className="w-full p-3 text-xs bg-black border border-gray-500 rounded-xl mt-7 opacity-60 input"
          />
        </div>
        <div>
          <textarea
            rows="15"
            cols="100"
            placeholder="message"
            className="w-full p-3 text-xs text-gray-400 bg-black border border-gray-500 lg:mb-10 rounded-xl mt-7 opacity-60 input"
          ></textarea>
          <button className="w-32 h-10 btn2 rounded-xl">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
