import React, { useState } from "react";

const Question3 = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white'>
      <p className="text-3xl">Question 3: {show && "● A toggle button to show or hide a paragraph of text"}</p>
      <button className="text-2xl m-8 h-12 w-28 hover:bg-slate-400 transition-transform transform hover:scale-110 text-white  rounded-md" onClick={() => setShow(!show)}>
        {show ? "Hide 🙈" : "Show 👀"}
      </button>
    </div>
  );
};

export default Question3;