import React from "react";
import { ImSad } from "react-icons/im";

const NotFound = () => {
  return (
    <div
      className="w-9/12 mx-auto flex  justify-center items-center"
      style={{ height: "660px" }}
    >
      <div className="text-center">
        <h1>
          <ImSad className="text-5xl text-red-300 ml-24" />
        </h1>
        <h1 className="mt-5 text-3xl text-gray-600">404 Error!</h1>
        <h1 className="mt-5 text-3xl text-gray-600">Page does not exist</h1>
      </div>
    </div>
  );
};

export default NotFound;
