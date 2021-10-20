import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TiMediaRecordOutline } from "react-icons/ti";
import { BsBookmarkCheck } from "react-icons/bs";
import BookAppoinment from "./BookAppoinment";

const ServiceDetails = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mohammed-Rakib/data/main/services.json"
    )
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  // finding matched data
  const service = services.find((service) => service.id === id);
  return (
    <div className="w-9/12 mx-auto py-5">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center">
        <div className="lg:p-5 p-0">
          <img
            src={service?.image}
            alt={service?.description}
            className="service-detail-image"
          />
        </div>
        <div className="px-5">
          <h1 className="text-2xl font-medium lg:py-5 text-gray-600 bg-green-200 text-center py-3">
            {service?.name}
          </h1>
          <p className="lg:mt-5 mt-1 leading-7  text-gray-400">
            {service?.description}
          </p>
          <p className="py-5 ">
            This service will cost
            <span className="text-sm"> $</span>
            <span className="text-xl font-semibold">{service?.cost}</span>
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center">
        <div className="lg:p-5 p-0">
          <h1 className="md:my-5 my-3 text-2xl  ">Benefits</h1>
          {service?.benefit.map((benefit) => {
            return (
              <li className="list-none flex py-3">
                <TiMediaRecordOutline className="mt-1 mr-5 text-green-400" />{" "}
                {benefit}
              </li>
            );
          })}
        </div>
        <div className="px-5 ">
          <div>
            <BookAppoinment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
