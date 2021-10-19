import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../context/useAuth";

const GoogleSignin = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div className="text-center mt-4">
      <button
        onClick={signInWithGoogle}
        className=" ml-7  flex justify-center text-gray-100 items-center px-4 py-2 rounded bg-purple-400 "
      >
        <FcGoogle className="text-3xl mr-4" /> Continue with Google
      </button>
    </div>
  );
};

export default GoogleSignin;
