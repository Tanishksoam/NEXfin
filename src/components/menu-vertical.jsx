import React from "react";
import { menu } from "../assets/images";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { TbArrowsExchange } from "react-icons/tb";
import { HiCurrencyRupee } from "react-icons/hi2";
import { IoLogInOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const MenuV = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);

  return (
    <>
      <div
        className=" w-12 h-12 bg-slate-50 rounded-full flex justify-center items-center mt-4"
        onClick={() => {
          console.log("clicked");
          setMenuDisplay(!menuDisplay);
        }}
      >
        <img src={menu} alt="" className=" w-8 h-8 " />
      </div>
      {menuDisplay && (
        <div className=" h-full w-full flex justify-start items-start px-4 relative">
          <div className=" w-[90%] h-[75%] bg-white rounded-lg mt-4 py-4 px-1">
            <ul className="flex flex-col justify-between items-center h-full">
              <Link to="/">
                <li className=" hover:scale-110 hover:grayscale-20 duration-300">
                  <AiFillHome size={30} />
                </li>
              </Link>
              <Link to="/transactions">
                <li className=" hover:scale-110 hover:grayscale-20 duration-300">
                  <TbArrowsExchange size={30} />
                </li>
              </Link>
              <Link to="/pricing">
                <li className=" hover:scale-110 hover:grayscale-20 duration-300">
                  <HiCurrencyRupee size={30} />
                </li>
              </Link>
              <li className=" hover:scale-110 hover:grayscale-20 duration-300 font-black text-xl">
                D
              </li>
              <Link to="/login">
                <li className=" hover:scale-110 hover:grayscale-20 duration-300">
                  <IoLogInOutline size={30} />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuV;
