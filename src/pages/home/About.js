import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-9/12 mx-auto grid md:grid-cols-2 grid-cols-1 py-10 items-center">
      <div className="py-5 md:px-5 px-3">
        <h3 className="text-gray-300 lg:text-3xl text-xl font-serif">
          Who we are _______
        </h3>
        <h1 className="lg:text-5xl text-3xl md:mt-5 mt-3 text-gray-500">
          Welcome to Physio Therapy & Chiroparctor Clinic
        </h1>
        <p className="text-sm lg:mt-8 mt-3">
          Established over 30 years ago, Therapy Center of New York (TCNY)
          offers a broad range of diagnostic, therapy and counseling services
          for adults, families and children. We have over 25+ psychiatrists,
          psychologists and social workers available to provide a wide variety
          of services and meet your specific needs and requirements.
        </p>
        <Link
          to="/services"
          className=" w-32 flex items-center mt-5 border transition-all hover:text-gray-100 text-gray-800 px-4 py-3 rounded-sm hover:bg-gray-900"
        >
          services <MdArrowRightAlt className="text-xl ml-1" />
        </Link>
      </div>
      <div className="py-5 overflow-hidden">
        <div className="overflow-hidden">
          <img
            className="lg:px-40 px-0 about-image overflow-hidden"
            src="https://i.ibb.co/MVwVfQn/image-1-1.jpg"
            alt="about "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
