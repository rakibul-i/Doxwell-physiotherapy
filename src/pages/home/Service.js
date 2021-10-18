import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, image, id } = props.service;
  return (
    <div className="p-5 shadow-md my-3 mx-3 overflow-hidden rounded-md">
      <div className="overflow-hidden">
        <img src={image} alt={name} className="service-image " />
      </div>
      <h1 className="py-5 text-center text-xl text-blue-800 font-medium">
        {name}
      </h1>
      <div className="text-center py-2">
        <Link
          to={`/service/${id}`}
          className="bg-gray-100 hover:bg-gray-500 hover:text-gray-200 p-3 rounded-md text-gray-400 "
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Service;
