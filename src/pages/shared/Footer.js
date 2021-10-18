import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-gray-800">
      <div className="w-9/12 mx-auto grid md:grid-cols-3 grid-cols-1 py-4">
        <div>
          <Link to="/">
            <img src="https://i.ibb.co/n8CkVt3/logo-2.png" alt="" />
          </Link>
        </div>
        <div>
          <h1 className="text-2xl text-white mt-3">Quick Links</h1>
          <Link to="/about" className="text-gray-200 text-sm py-2 block">
            About us
          </Link>
          <Link to="/services" className="text-gray-200 text-sm py-2 block">
            Services
          </Link>
          <Link to="/about" className="text-gray-200 text-sm py-2">
            About us
          </Link>
        </div>
        <div>
          <h1 className="text-2xl text-white mt-3">Get In Touch</h1>
          <p className="text-sm text-gray-300 mt-3">+880181111111</p>
          <p className="text-sm text-gray-300 mt-3">contact@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
