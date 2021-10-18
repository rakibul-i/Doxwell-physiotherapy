import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrGooglePlus } from "react-icons/gr";

const TopBanner = () => {
  return (
    <div className="bg-gray-600 ">
      <div className="md:w-9/12 w-100 md:px-0 px-3 mx-auto flex justify-between items-center py-1">
        <div className="phone-email flex item-center md:space-x-5 space-x-2">
          <span className="flex text-sm text-gray-100">
            <BsTelephone className="mt-1  mr-2 " />
            <span className="md:block hidden">0184599900</span>
          </span>
          <span className="flex text-sm text-gray-100">
            <AiOutlineMail className="mt-1  mr-2 " />
            <span className="md:block hidden">contact@example.com</span>
          </span>
        </div>
        <div className="contact-icon flex space-x-3 text-sm">
          <FaFacebookF className="cursor-pointer text-gray-200 hover:text-white text-sm" />
          <AiOutlineInstagram className="cursor-pointer text-gray-200 hover:text-white text-lg" />
          <AiOutlineTwitter className="cursor-pointer text-gray-200 hover:text-white text-lg" />
          <GrGooglePlus className="cursor-pointer text-gray-200 hover:text-white text-lg" />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
