import React from "react";

const Header_button = ({ sorc }) => {
  return (
    <li className=" w-14 h-14 border-2 border-[#525152] border-b-4 rounded-full flex items-center justify-center overflow-hidden ">
      <img src={sorc} alt="" />
    </li>
  );
};

export default Header_button;
