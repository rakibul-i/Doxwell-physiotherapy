import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mohammed-Rakib/data/main/services.json"
    )
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  if (services.length === 0) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ minHeight: "700px" }}
      >
        <h1 className="text-3xl text-red-400">Loading.....</h1>
      </div>
    );
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
