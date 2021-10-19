import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineFileText } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import GoogleSignin from "./GoogleSignin";
import useAuth from "../../context/useAuth";

const Signup = () => {
  const { signupWithEmailAndPassword } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    signupWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="signup flex items-center justify-center ">
      <div className="bg-green-200 md:p-12 px-1 py-8 text-center rounded relative">
        <form onSubmit={handleSubmit(onSubmit)}>
          <span className="text-center mx-auto">
            <FaUserCircle
              className=" text-green-700 absolute  md:right-40 right-32"
              style={{ fontSize: "90px", top: "-40px" }}
            />
          </span>
          <h1 className="my-4 text-2xl ">Create an account</h1>
          <p>
            Already have an account?{" "}
            <Link className="text-sm text-blue-600" to="/signin">
              Sign in
            </Link>{" "}
          </p>
          <div className="flex items-center bg-white md:px-3 px-0 rounded my-3">
            <AiOutlineFileText className="text-xl text-green-500 md:mx-3 mx-1" />
            <input
              type="text"
              placeholder="Username"
              className=" md:px-4 px-1 py-2 focus:outline-none "
              autoComplete="off"
              {...register("username", { required: true })}
            />
          </div>
          <span className="text-sm text-red-500">
            {errors.username?.type === "required" &&
              "Username name is required"}
          </span>
          <div className="flex items-center bg-white md:px-3 px-0 rounded my-3">
            <HiOutlineMail className="text-xl text-green-500 md:mx-3 mx-1" />
            <input
              type="email"
              placeholder="Email"
              className=" md:px-4 px-1 py-2 focus:outline-none"
              {...register("email", { required: true })}
            />
          </div>
          <span className="text-sm text-red-500">
            {errors.email?.type === "required" && "email name is required"}
          </span>
          <div className="flex items-center bg-white md:px-3 px-0 rounded mt-3">
            <RiLockPasswordLine className="text-xl text-green-500 md:mx-3 mx-1" />
            <input
              type="password"
              placeholder="Password"
              className=" md:px-4 px-1 py-2 focus:outline-none"
              {...register("password", {
                required: true,
                pattern: /^(?=.{8,})/,
              })}
            />
          </div>
          <span className="text-sm text-red-500 block">
            {errors.password?.type === "required" && "password  is required"}
          </span>
          <span className="text-sm text-red-500 block">
            {errors.password?.type === "pattern" &&
              "password must be 8 characters"}
          </span>

          <input
            className="bg-purple-400 cursor-pointer mt-4 text-white px-5 py-2 rounded"
            type="submit"
          />
        </form>
        <p className="text-gray-400 mt-4">----------- or ------------</p>
        <div>
          <GoogleSignin />
        </div>
      </div>
    </div>
  );
};

export default Signup;
