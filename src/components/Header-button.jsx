import React from "react";

const Header_button = ({ sorc }) => {
  return (
    <li className=" w-10 h-10 border-2 border-[#525152] border-b-4 rounded-full flex items-center justify-center overflow-hidden ">
      <img className=" w-[65%] h-auto" src={sorc} alt="" />
    </li>
  );
};

export default Header_button;
