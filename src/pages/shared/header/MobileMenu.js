import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../context/useAuth";

const MobileMenu = () => {
  const activeStyle = {
    color: "white",
    backgroundColor: "#4b5563",
  };
  const { user } = useAuth();
  return (
    <div className="px-4 pb-5 transition-all duration-1000 md:hidden">
      <NavLink
        to="/home"
        activeStyle={activeStyle}
        className="hover:text-gray-100  px-3 py-2 rounded-md font-bold hover:bg-gray-600  text-gray-100 transition-all flex items-center my-2"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        activeStyle={activeStyle}
        className="hover:text-gray-100  px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center"
      >
        About
      </NavLink>
      <NavLink
        to="/services"
        activeStyle={activeStyle}
        className="hover:text-gray-100  px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center mt-2"
      >
        Services
      </NavLink>
      <NavLink
        to="/therapists"
        activeStyle={activeStyle}
        className="hover:text-gray-100  px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center mt-2"
      >
        Therapists
      </NavLink>
      {user?.displayName || user?.email ? (
        <NavLink
          to="/profile"
          activeStyle={activeStyle}
          className="hover:text-gray-100 px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center "
        >
          Profile
        </NavLink>
      ) : (
        <NavLink
          to="/account"
          activeStyle={activeStyle}
          className="hover:text-gray-100 px-3 py-2 rounded-md font-bold hover:bg-gray-600 text-gray-100 transition-all flex items-center "
        >
          Account
        </NavLink>
      )}
    </div>
  );
};

export default MobileMenu;
