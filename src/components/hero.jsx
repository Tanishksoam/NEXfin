import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className=" w-screen relative">
      <div className=" max-w-screen h-screen flex flex-col gap-5 justify-center items-center align-middle justify-self-center">
        <div className=" w-4/5 text-center">
          <h1 className=" sm:text-6xl text-3xl text-zinc-700 font-titleFont font-normal">
            Welcome! set{" "}
            <span className="font-semibold sm:text-7xl text-3xl">
              automated payment
            </span>{" "}
            requests in minutes
          </h1>
        </div>
        <div className=" sm:w-1/2 w-full text-center">
          <p className=" sm:text-3xl text-lg font-bodyFont  text-gray-500 font-normal">
            upload your database and set up your account
          </p>
        </div>
        <div className=" w-1/5 font-bodyFont">
          <a href="#steps">
            <button className=" w-full h-10 bg-sky-700 rounded-full text-white flex justify-between items-center px-8">
              <span>Lets Go...</span>
              <span>
                <BsArrowRight size={30} />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
