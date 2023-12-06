import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className=" w-screen relative">
      <div className=" max-w-screen h-screen flex flex-col gap-5 justify-center items-center align-middle justify-self-center">
        <div className=" w-4/5 text-center">
          <h1 className=" text-6xl text-zinc-700 font-titleFont font-normal">
            Welcome! set{" "}
            <span className="font-semibold text-7xl">automated payment</span>{" "}
            requests in minuets
          </h1>
        </div>
        <div className=" w-1/2 text-center">
          <p className=" text-3xl font-bodyFont  text-gray-500 font-normal">
            upload your database and set up your account
          </p>
        </div>
        <div className=" w-1/5 font-bodyFont">
          <button className=" w-full h-10 bg-sky-700 rounded-full text-white flex justify-between items-center px-8">
            <span>Lets Go...</span>
            <span>
              <BsArrowRight size={30} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
