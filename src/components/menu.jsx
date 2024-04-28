import React, { useEffect } from "react";
import { menu } from "../assets/images";
import { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [menuDisplay, setMenuDisplay] = useState(true);
  onclick = () => {
    setMenuDisplay(!menuDisplay);
  };

  return (
    <>
      <div className=" w-12 h-12 bg-slate-50 rounded-full flex justify-center items-center mt-4">
        <img onClick={() => onclick} src={menu} alt="" className=" w-8 h-8 " />
      </div>
      {menuDisplay && (
        <div className=" h-full w-full flex justify-start items-center px-4 relative">
          <div className=" w-[60%] h-12 bg-white rounded-lg mt-4">
            <ul className="flex justify-around items-center h-full">
              <Link to="/">
                <li className=" hover:scale-110 duration-300">Home</li>
              </Link>
              <Link to="/">
                <li className=" hover:scale-110 duration-300">Transactions</li>
              </Link>
              <Link to="/pricing">
                <li className=" hover:scale-110 duration-300">Pricing</li>
              </Link>
              <li className=" hover:scale-110 duration-300">Demo</li>
              <Link to="/">
                <li className=" hover:scale-110 duration-300">Login/signUp</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
