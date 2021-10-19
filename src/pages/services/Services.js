import React from "react";
import useAuth from "../../context/useAuth";
import Service from "./Service";

const Services = () => {
  const { services, isLoading } = useAuth();

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="md:w-9/12 w-11/12 mx-auto">
      <h1 className="py-5 md:text-5xl text-2xl font-semibold text-gray-300 font-serif">
        Services______
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-5">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
