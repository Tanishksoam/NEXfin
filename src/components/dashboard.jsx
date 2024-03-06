import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import TableComponent from "./TableContent";

const Profile = () => {
  const user = useSelector((state) => state.nex.UserInfo);

  return (
    <div className="w-screen flex flex-col gap-5 items-center pt-8">
      <h1 className=" font-titleFont text-xl sm:text-3xl md:text-5xl font-semibold">
        Profile
      </h1>
      <div className=" w-full flex xs:flex-col items-center justify-center gap-4  px-10">
        <div>
          <img className="w-32 rounded-full z-50" src={user.image} alt="" />
        </div>
        <div className=" ">
          <div className="flex flex-col gap-4 text-sm sm:text-md md:text-xl">
            <h2>
              <span className="text-sm sm:text-md md:text-xl font-semibold">
                id
              </span>{" "}
              : {user._id}
            </h2>
            <h2>
              <span className="text-sm sm:text-md md:text-xl font-semibold">
                Username
              </span>{" "}
              : {user.name}
            </h2>
            <h2>
              <span className="text-sm sm:text-md md:text-xl font-semibold">
                Email
              </span>{" "}
              : {user.email}
            </h2>
          </div>
        </div>
      </div>
      <TableComponent />
    </div>
  );
};

export default Profile;
