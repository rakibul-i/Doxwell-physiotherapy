import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, image, id, description } = props.service;
  const desc = description.slice(0, 80);
  return (
    <div className="p-5 shadow-md my-3 mx-3 overflow-hidden rounded-md">
      <div className="overflow-hidden">
        <img src={image} alt={name} className="service-image " />
      </div>
      <h1 className="py-5 text-center text-xl text-blue-800 font-medium">
        {name}
      </h1>
      <p className="text-sm text-gray-400 text-center pb-4">{desc}...</p>
      <div className="text-center py-2">
        <Link
          to={`/service/${id}`}
          className="bg-gray-100  hover:text-gray-800 p-3 rounded-md text-gray-400 "
        >
          Get appoinment
        </Link>
      </div>
    </div>
  );
};

export default Service;
