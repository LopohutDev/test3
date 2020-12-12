import React from "react";

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
      <div className="max-w-sm p-10 mx-auto mt-20 lg:max-w-6xl">
        <div className="flex justify-between h-12 text-xs">
          <input
            className="w-1/3 p-3 mr-4 bg-black border border-gray-500 opacity-60 input"
            placeholder="Name"
          />
          <input
            className="w-1/3 p-3 mx-4 bg-black border border-gray-500 opacity-60 input"
            placeholder="Email Address"
          />
          <input
            className="w-1/3 p-3 ml-4 bg-black border border-gray-500 opacity-60 input"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <input
            placeholder="Subject"
            className="w-full p-3 text-xs bg-black border border-gray-500 mt-7 opacity-60 input"
          />
        </div>
        <div>
          <textarea
            id="w3review"
            name="w3review"
            rows="15"
            cols="100"
            className="w-full p-3 mb-10 text-xs text-gray-400 bg-black border border-gray-500 mt-7 opacity-60 input"
          >
            Message
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
