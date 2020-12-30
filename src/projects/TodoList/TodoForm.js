import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mt-2 text-black">
      {props.edit ? (
        <>
          <div className="flex items-center justify-between h-16 text-black bg-black border-2 border-red-500 rounded-xl">
            <input
              placeholder="Update your item"
              value={input}
              onChange={handleChange}
              name="text"
              ref={inputRef}
              className="w-full h-full p-2 text-black bg-white rounded-l-xl"
            />
            <button
              className="h-full p-2 hover:bg-red-500 rounded-r-xl"
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center w-full text-black ">
            <input
              placeholder="Add a todo"
              value={input}
              onChange={handleChange}
              name="text"
              ref={inputRef}
              className="p-2 text-black border border-red-500 rounded-l-full h-14 focus:border-none"
            />
            <button
              onClick={handleSubmit}
              className="p-1 font-bold bg-red-500 border border-red-500 rounded-r-full h-14 hover:bg-red-900 focus:border-none"
            >
              Add Todo
            </button>
          </div>
        </>
      )}
    </form>
  );
}

export default TodoForm;
