import React from "react";
import { graph } from "../assets/images";
import Steps from "./steps";

const Hero = () => {
  return (
    <div className=" w-screen h-100vh flex flex-col justify-center gap-6 items-center my-4 z-4 relative ">
      <div className="w-5/6 bg-zinc-950 relative flex flex-col justify-center items-center gap-8 rounded-3xl p-4 border-zinc-400 border-b-8 border-r-8 z-20">
        <div className=" w-full flex justify-between items-center">
          <div className=" w-auto text-white text-left">
            <h1 className="text-3xl text-[#9BE36D] font-bold font-bodyFont">
              192
            </h1>
            <h6>Inflow Today</h6>
          </div>
          <div className="w-auto  grid grid-cols-3 grid-flow-row relative">
            <h1 className="text-3xl text-right text-white font-bold font-bodyFont">
              Automated
            </h1>
            <h1 className="text-3xl text-left pl-2 text-white font-bold font-bodyFont">
              <span className="text-[#9BE36D]">Payments</span>
            </h1>
            <h1 className="text-3xl text-center text-white font-bold font-bodyFont"></h1>
            <h1 className="text-3xl text-left pl-2 text-white font-bold font-bodyFont"></h1>
            <h1 className="text-3xl text-right text-[#9E9ED7] font-bold font-bodyFont">
              Autonomous
            </h1>
            <h1 className="text-3xl text-left pl-2 text-white font-bold font-bodyFont ">
              Life
            </h1>
          </div>
          <div className="w-auto flex items-center justify-start relative ">
            <div className="w-4 h-4 rounded-full bg-[#9EE96E] absolute z-5 top-[-30px] left-[-80px] "></div>
            <div className="w-4 h-4 rounded-full bg-[#A3A7F5] absolute z-10  top-[-30px] left-[-70px]"></div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={graph} alt="" />
        </div>
        <div className="w-24 h-10 flex items-center justify-center">
          <button className=" w-full flex flex-row justify-between  items-center p-2 rounded-xl text-white bg-[#9E9ED7] border-[1px] border-b-4 border-r-4 border-[#525152]">
            <h4>Lets go</h4>
            <h4>{`>`}</h4>
          </button>
        </div>
      </div>
      <Steps />
    </div>
  );
};

export default Hero;
