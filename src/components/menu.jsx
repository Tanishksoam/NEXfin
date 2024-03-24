import React from "react";
import { menu } from "../assets/images";
import { useState } from "react";

const Menu = () => {
  const [menuDisplay, setMenuDisplay] = useState(true);
  return (
    <>
      <div className=" w-12 h-12 bg-slate-50 rounded-full flex justify-center items-center mt-4">
        <img src={menu} alt="" className=" w-8 h-8 " />
      </div>
      {/* {menuDisplay && (
        <div className=" w-screen h-screen flex relative">
          <div className=" w-72 h-[90%] bg-white abolute left-0 top-[10%] rounded-e-lg"></div>
        </div>
      )} */}
    </>
  );
};

export default Menu;
