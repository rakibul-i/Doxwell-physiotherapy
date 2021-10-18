import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const Banner = () => {
  return (
    <div className="banner">
      <div className="w-9/12 mx-auto grid py-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div className="mt-10">
          <h1 className="bg-white text-gray-500 px-5 py-3  mt-10 lg:text-5xl md:text-3xl font-bold ">
            We give solution
          </h1>
          <h1 className="bg-gray-700 text-gray-200 lg:text-5xl md:text-3xl font-bold px-5 py-3 mt-1">
            to your Pain
          </h1>
          <p className="mt-10 text-gray-300">
            Dr. Robert Joe is prepared to suggest remedial and rehabilitative
            activities, and also to give wholesome, dietary and way of life
            directing.
          </p>
          <button className="flex items-center mt-5 bg-gray-800 text-gray-200 px-4 py-3 rounded-sm hover:bg-gray-900">
            Learn more <MdArrowRightAlt className="text-xl ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
