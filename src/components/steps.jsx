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
    <>
      <div className="w-full flex items-center justify-center font-titleFont font-bold text-lg">
        <h1>Follow 3 simple Steps</h1>
      </div>
      <div className="w-full h-auto flex  items-center justify-center gap-4 z-5">
        <div className="w-1/4 h-full flex flex-col justify-center bg-[#9EE96E] gap-2 p-4 rounded-xl border-2 border-b-4 border-r-4 border-gray-500">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-titleFont font-bold">Step 1 </h4>
            <h4 className="text-lg font-titleFont font-bold">:</h4>
            <h4 className="text-lg font-titleFont font-bold">
              Your bank details
            </h4>
          </div>
          <div>
            <h4 className="text-md font-bodyFont ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate delectus molestiae sunt ex sit id quidem sapiente
              suscipit voluptates soluta natus, veritatis voluptate libero
              quaerat! Laborum porro iste rem adipisci!
            </h4>
          </div>
          <div className="w-full h-auto flex  justify-end">
            <button
              onClick={handleClient}
              className=" w-auto h-6 sm:h-10 bg-[#74AC50] rounded-full text-white flex text-xs sm:text-sm md:text-md justify-center items-center text-center  px-6"
            >
              <span>Enter Details</span>
            </button>
          </div>
        </div>
        <div className="w-1/4 h-full flex flex-col justify-center bg-[#A3A7F5] gap-2 p-4 rounded-xl border-2 border-b-4 border-r-4 border-gray-500">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-titleFont font-bold">Step 2 </h4>
            <h4 className="text-lg font-titleFont font-bold">:</h4>
            <h4 className="text-lg font-titleFont font-bold">
              Your Client Details
            </h4>
          </div>
          <div>
            <h4 className="text-md font-bodyFont ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate delectus molestiae sunt ex sit id quidem sapiente
              suscipit voluptates soluta natus, veritatis voluptate libero
              quaerat! Laborum porro iste rem adipisci!
            </h4>
          </div>
          <div className="w-full flex  justify-center items-center gap-2">
            <button
              onClick={handleClientBase}
              className=" w-auto px-4 h-10 bg-[#6d71b7] sm:text-sm md:text-md text-xs  rounded-full text-white flex justify-center items-center text-center"
            >
              Enter Details
            </button>
            <p className=" text-md sm:text-lg md:text-2xl text-[#6d71b7] font-titleFont">
              {" "}
              Or
            </p>
            <Link to="/fileupload">
              <button className=" w-auto px-4 h-10 sm:text-sm md:text-md text-xs bg-[#6d71b7] rounded-full text-white flex justify-center items-center justify-items-center text-center">
                Upload Excel Sheet
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/4 h-full flex flex-col justify-center bg-zinc-900 text-white gap-2 p-4  rounded-xl border-2 border-b-4 border-r-4 border-gray-500">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-titleFont font-bold">Step 3 </h4>
            <h4 className="text-lg font-titleFont font-bold">:</h4>
            <h4 className="text-lg font-titleFont font-bold">
              Relax and get payments
            </h4>
          </div>
          <div>
            <h4 className="text-md font-bodyFont ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate delectus molestiae sunt ex sit id quidem sapiente
              suscipit voluptates soluta natus, veritatis voluptate libero
              quaerat! Laborum porro iste rem adipisci!
            </h4>
          </div>
          <div className="w-full h-auto flex  justify-end">
            <button
              onClick={handleClient}
              className=" w-auto h-6 sm:h-10 bg-zinc-700 rounded-full text-white flex text-xs sm:text-sm md:text-md justify-center items-center text-center  px-6"
            >
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
