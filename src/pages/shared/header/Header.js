import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import TopBanner from "./TopBanner";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isShow, setIsShow] = useState(true);

  const mobileMenuHandler = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="bg-gray-800 text-white">
      {/* top banner */}
      <TopBanner />
      {/* navigation for desktop and ipad devices and mobile menu */}
      <div className="md:w-9/12  w-100 md:px-0 px-4 mx-auto flex items-center justify-between py-3">
        <Link to="/">
          <img
            src="https://i.ibb.co/n8CkVt3/logo-2.png"
            alt="doxwell physiotherapy"
            style={{ width: "160px" }}
          />
        </Link>
        <Navigation />

        {/* // moblie menu button */}
        <button onClick={mobileMenuHandler} className="md:hidden block ">
          <GiHamburgerMenu className="text-3xl " />
        </button>
      </div>
      {/* // mobile menu */}
      <div className={isShow ? "hidden" : "block"}>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
