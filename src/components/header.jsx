import React from "react";
import { logo, menu } from "../assets/images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.nex.UserInfo);

  return (
    <div className="w-full md:h-20 h-10 bg-white border-b-[1px]  sticky md:top-0 top-6 z-50 px-2">
      <div className="max-w-screen h-full mx-auto flex items-center justify-between">
        <div className=" h-20 justify-center items-center">
          <img
            src={logo}
            alt=""
            className="sm:w-32 w-20 justify-center items-center"
          />
        </div>
        <div className=" h-20 justify-center items-center">
          <img
            src={menu}
            alt=""
            className="sm:w-20 w-16 md:hidden justify-center items-center"
          />
        </div>
        <div className="md:flex items-center gap-8 font-titleFont md:visible hidden">
          <ul className="flex items-center gap-8 font-titleFont">
            <Link to="/">
              <li className="text-base font-normal text-black hover:text-sky-700  cursor-pointer duration-100">
                Home
              </li>
            </Link>
            <li className="text-base font-normal text-black hover:text-sky-700  cursor-pointer duration-100">
              Element
            </li>
            <Link to="/pricing">
              <li className="text-base font-normal text-black hover:text-sky-700  cursor-pointer duration-100">
                pricing
              </li>
            </Link>
          </ul>
          {user !== null ? (
            <div className="flex items-center gap-8 font-titleFont">
              <Link to="/dashboard">
                <div className="text-base font-normal border-[1px] text-black hover:bg-sky-700 hover:text-white rounded-3xl p-4  cursor-pointer duration-100">
                  {user.name}
                </div>
              </Link>
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
