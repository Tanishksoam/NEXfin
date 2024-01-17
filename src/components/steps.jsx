import React from "react";
import { pic1, pic2, pic3, pic4 } from "../assets/images";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Steps = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.nex.UserInfo);
  const handleClient = () => {
    if (userInfo === null) {
      return navigate("/login");
    }
    navigate("/client");
  };

  const handleClientBase = () => {
    if (userInfo === null) {
      return navigate("/login");
    }
    navigate("/paytable");
  };
  return (
    <div
      id="steps"
      className=" w-full flex flex-col gap-16 justify-center items-center py-20"
    >
      <div className=" w-4/5 text-center flex flex-col gap-5">
        <h1 className=" text-6xl text-gray-800 font-titleFont">
          Follow <span className=" font-semibold">3 simple steps</span>
        </h1>
        <p className="text-3xl text-gray-500 font-titleFont font-thin">
          Start your journey of ease now...
        </p>
      </div>
      <div className="w-4/5 text-center flex justify-between items-center">
        <div className=" w-1/2 flex flex-col gap-10">
          <h2 className=" text-4xl font-titleFont text-gray-800 text-start">
            <span className=" font-semibold text-5xl">Step 1</span> Enter your
            bank details{" "}
          </h2>
          <p className=" text-gray-600 font-bodyFont text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            delectus molestiae sunt ex sit id quidem sapiente suscipit
            voluptates soluta natus, veritatis voluptate libero quaerat! Laborum
            porro iste rem adipisci!
          </p>
          <div className="flex justify-between items-center">
            <button
              onClick={handleClient}
              className=" w-56 h-10 bg-sky-700 rounded-full text-white flex justify-center items-center text-center px-6"
            >
              <span>Enter Details</span>
            </button>
          </div>
        </div>
        <div className=" w-96 h-80 rounded-md overflow-hidden">
          <img src={pic2} alt="" />
        </div>
      </div>
      <div className="w-4/5 text-center flex justify-between items-center">
        <div className=" w-96 h-80 rounded-md overflow-hidden">
          <img src={pic4} alt="" />
        </div>
        <div className=" w-1/2 flex flex-col gap-10">
          <h2 className=" text-4xl font-titleFont text-gray-800 text-start">
            <span className=" font-semibold text-5xl">Step 2</span> Enter
            customer Details or upload a excel sheet{" "}
          </h2>
          <p className=" text-gray-600 font-bodyFont text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            delectus molestiae sunt ex sit id quidem sapiente suscipit
            voluptates soluta natus, veritatis voluptate libero quaerat! Laborum
            porro iste rem adipisci!
          </p>
          <div className="flex justify-between items-center">
            <button
              onClick={handleClientBase}
              className=" w-56 h-10 bg-sky-700 rounded-full text-white flex justify-center items-center text-center"
            >
              <span>Enter Details</span>
            </button>

            <p className=" text-2xl text-gray-500 font-titleFont"> Or</p>
            <button className=" w-56 h-10 bg-sky-700 rounded-full text-white flex justify-center items-center justify-items-center text-center">
              Upload Excel Sheet
            </button>
          </div>
        </div>
      </div>
      <div className="w-4/5 text-center flex justify-between items-center">
        <div className=" w-1/2 flex flex-col gap-10">
          <h2 className=" text-4xl font-titleFont text-gray-800 text-start">
            <span className=" font-semibold text-5xl">Step 3</span> Relax and
            get payments on time{" "}
          </h2>
          <p className=" text-gray-600 font-bodyFont text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            delectus molestiae sunt ex sit id quidem sapiente suscipit
            voluptates soluta natus, veritatis voluptate libero quaerat! Laborum
            porro iste rem adipisci!
          </p>
        </div>
        <div className=" w-96 h-80 rounded-md overflow-hidden">
          <img src={pic3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Steps;
