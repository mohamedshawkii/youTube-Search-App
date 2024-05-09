import React from "react";
import { Link } from "react-router-dom";

function BackToHome() {
  return (
    <div className=" m-4 flex flex-col gap-4 justify-center items-center text-[#83FFA3] ">
      <p>Back to Home Page</p>
      <Link to="/">
        <button className="bg-[#83FFA3] px-8 py-2 rounded-lg text-lg font-medium text-[#161C2D]" >
          Home
        </button>
      </Link>
    </div>
  );
}

export default BackToHome;
