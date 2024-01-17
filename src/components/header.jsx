import React from "react";
import { logo } from "../assets/images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.nex.UserInfo);

  return (
    <div className="w-full h-20 bg-white border-b-[1px]  sticky top-0 z-50 ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div className=" h-20 justify-center items-center">
          <img src={logo} alt="" className="w-32 justify-center items-center" />
        </div>
        <div className="flex items-center gap-8 font-titleFont">
          <ul className="flex items-center gap-8 font-titleFont">
            <li className="text-base font-normal text-black hover:text-sky-700  cursor-pointer duration-100">
              Home
            </li>
            <li className="text-base font-normal text-black hover:text-sky-700  cursor-pointer duration-100">
              Element
            </li>
            <Link to="/payment">
              <li className="text-base font-normal text-black hover:text-sky-700  cursor-pointer duration-100">
                Blog
              </li>
            </Link>
          </ul>
          {user !== null ? (
            <div className="flex items-center gap-8 font-titleFont">
              <li className="text-base font-normal text-black hover:text-sky-700  cursor-pointer duration-100">
                {user.name}
              </li>
            </div>
          ) : (
            <div className=" flex gap-5 justify-center items-center">
              <Link to="/login">
                <button className=" bg-sky-700 text-white px-6 py-2 rounded-full hover:bg-white hover:text-sky-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Login
                </button>
              </Link>
              <button className=" bg-sky-700 text-white px-6 py-2 rounded-full hover:bg-white hover:text-sky-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Sign up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
