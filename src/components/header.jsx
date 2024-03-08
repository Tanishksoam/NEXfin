import React from "react";
import {
  activeMsg,
  activeNotification,
  calender,
  logo,
  menu,
  profile,
} from "../assets/images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Header_button from "./Header-button";

const Header = () => {
  const user = useSelector((state) => state.nex.UserInfo);

  return (
    <div className="w-full  bg-white  sticky top-0 z-50 px-10">
      <div className="max-w-screen h-16 flex items-center justify-between">
        <div className=" h-10 flex justify-center items-center">
          <Link to="/">
            <img
              src={logo}
              alt=""
              className="sm:w-32 w-20 justify-center items-center"
            />
          </Link>
        </div>
        <div className=" h-20 justify-center items-center">
          <img
            src={menu}
            alt=""
            className="sm:w-20 w-16 md:hidden justify-center items-center"
          />
        </div>
        <div className="md:flex items-center justify-center gap-8 font-titleFont  hidden">
          <ul className="flex justify-center items-center gap-8 font-titleFont ">
            <Header_button sorc={calender} />
            <Header_button sorc={activeNotification} />
            <Header_button sorc={activeMsg} />

            {user !== null ? (
              <div className="flex items-center gap-8 font-titleFont">
                <Link to="/dashboard">
                  <li className=" w-10 h-10 border-2 border-[#525152] border-b-4 rounded-full flex items-center justify-center overflow-hidden ">
                    <img className=" w-[100%] h-auto" src={user.image} alt="" />
                  </li>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <li className=" w-10 h-10 border-2 border-[#525152] border-b-4 rounded-full flex items-center justify-center overflow-hidden ">
                  <img className=" w-[100%] h-auto" src={profile} alt="" />
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
      <div className="max-w-screen  h-full mx-auto flex justify-start items-center font-bodyFont  text-gray-400 font-semibold  border-b-2 border-gray-400">
        <Link to="/">
          <h4 className="mb-[-2px] border-gray-400 hover:border-b-2 hover:border-gray-600 hover:text-gray-600 px-4 py-2">
            Home
          </h4>
        </Link>
        <h4 className=" mb-[-2px] hover:border-b-2 hover:border-gray-600 hover:text-gray-600 px-4 py-2">
          Transactions
        </h4>
        <Link to="pricing">
          <h4 className=" mb-[-2px] hover:border-b-2 hover:border-gray-600 hover:text-gray-600 px-4 py-2">
            Pricing
          </h4>
        </Link>
        <h4 className=" mb-[-2px] hover:border-b-2 hover:border-gray-600 hover:text-gray-600 px-4 py-2">
          Demo
        </h4>
        <Link to="/login">
          <h4 className=" mb-[-2px] text-[#7B7BC1] hover:border-b-2 hover:border-[#5a5aa5] hover:text-[#5a5aa5] px-4 py-2">
            Login/Sign Up
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
