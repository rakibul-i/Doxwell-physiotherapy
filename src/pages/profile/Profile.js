import React from "react";
import useAuth from "../../context/useAuth";
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
  const { logOut, user } = useAuth();
  return (
    <div className="w-9/12 mx-auto" style={{ minHeight: "670px" }}>
      <div>
        <h1 className="py-20 md:text-3xl text-xl">
          <span className="block">Welcome</span>
          <span className="text-green-500">
            {user?.displayName ? user?.displayName : user?.email}!
          </span>
        </h1>
      </div>
      <button
        onClick={logOut}
        className="flex items-center bg-red-400 px-5 py-3 rounded text-white"
      >
        <FiLogOut className="text-xl mr-2" />
        Sign out
      </button>
    </div>
  );
};

export default Profile;
