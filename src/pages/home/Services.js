import React from "react";
import useServices from "../../hooks/useServices";
import Service from "./Service";

const Services = () => {
  const [services] = useServices();
  const showServices = services.slice(0, 4);

  return (
    <div className="w-9/12 mx-auto">
      <h1 className="py-5 md:text-5xl text-2xl font-semibold text-gray-300 font-serif">
        Services______
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 py-5">
        {showServices.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
