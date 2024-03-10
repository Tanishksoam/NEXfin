import React from "react";
import { graph, tag } from "../assets/images";
import Steps from "./steps";
import VisitorCounter from "./visitorcount";

const Hero = () => {
  return (
    <div className=" w-screen flex flex-col justify-center gap-2 items-center z-4 relative  overflow-scroll">
      <div className="w-5/6 bg-zinc-950 relative flex flex-col justify-center items-center gap-8 rounded-3xl mt-4 p-4 border-[#B0B0B0] border-b-8 border-r-8 z-10">
        <div className="w-36 h-10  bg-[#FAF3E1] border-[1px] border-[#D78E2C] rounded-md absolute z-20 top-[65%] left-[-50px] flex items-center justify-between ">
          <div className="w-auto h-full pl-2  bg-transparent flex items-center justify-center overflow-hidden ">
            <img className=" w-10 h-10" src={tag} alt="" />
          </div>
          <h1 className="text-black text-sm p-2  font-bodyFont text-center">
            Test Mode
          </h1>
          <div className="w-auto h-full border-l-[1px] p-2  border-[#D78E2C] bg-transparent flex items-center justify-center ">
            <div className=" w-6 h-6 border-[1px] border-black bg-white rounded-sm flex items-center justify-center ">
              <h4>0</h4>
            </div>
          </div>
        </div>
        <div className="w-36 h-10  bg-[#B0B0B0]  rounded-md absolute z-0 top-[69%] left-[-35px] "></div>
        <div className="w-36 h-10  bg-zinc-950  absolute z-10 top-[69%] left-0 "></div>

        <div className="w-36 h-10  bg-[#FAF3E1] border-[1px] border-[#D78E2C] rounded-md absolute z-20 top-[20%] right-[-50px] flex items-center justify-between ">
          <div className="w-auto h-full pl-2  bg-transparent flex items-center justify-center overflow-hidden ">
            <img className=" w-10 h-10" src={tag} alt="" />
          </div>
          <h1 className="text-black text-sm p-2  font-bodyFont text-center">
            Test Mode
          </h1>
          <div className="w-auto h-full border-l-[1px] p-2  border-[#D78E2C] bg-transparent flex items-center justify-center ">
            <div className=" w-6 h-6 border-[1px] border-black bg-white rounded-sm flex items-center justify-center ">
              <h4>0</h4>
            </div>
          </div>
        </div>
        <div className="w-36 h-10  bg-[#B0B0B0]  rounded-md absolute z-0 top-[23%] right-[-65px] "></div>
        <div className="w-36 h-10  bg-zinc-950  absolute z-10 top-[23%] right-0 "></div>

        <div className=" w-full flex justify-between items-center">
          <div className=" w-auto text-white text-left">
            <VisitorCounter />
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
