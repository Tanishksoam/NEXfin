import React from "react";
import axios from "axios";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logo } from "../assets/images";
import { quote } from "../assets/images";
import Menu from "./menu";

const Client = () => {
  const [state, setState] = useState();
  const user = useSelector((state) => state.nex.UserInfo);
  const navigate = useNavigate();

  const nameRef = useRef("");
  const contRef = useRef("");
  const emailRef = useRef("");
  const accountRef = useRef("");
  const IFSCRef = useRef("");
  const upiRef = useRef("");

  const handleOnClick = () => {
    const temp = {
      name: nameRef.current.value,
      cont: contRef.current.value,
      email: emailRef.current.value,
      account: accountRef.current.value,
      IFSC: IFSCRef.current.value,
      UPI: upiRef.current.value,
    };
    setState(temp);

    nameRef.current.value = "";
    contRef.current.value = "";
    emailRef.current.value = "";
    accountRef.current.value = "";
    IFSCRef.current.value = "";
    upiRef.current.value = "";
  };

  const getData = async (e) => {
    e.preventDefault();
    toast.success("wait for a moment");
    const temp = {
      name: nameRef.current.value,
      cont: contRef.current.value,
      email: emailRef.current.value,
      account: accountRef.current.value,
      IFSC: IFSCRef.current.value,
      UPI: upiRef.current.value,
    };

    try {
      const { name, cont, email, account, IFSC, UPI } = temp;

      const response = await axios.post(
        `https://nexfin-6b44a-default-rtdb.firebaseio.com/User/${user.name}.json`,
        {
          Name: name,
          contact: cont,
          email: email,
          account: account,
          IFSC: IFSC,
          UPI: UPI,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            key: "AIzaSyBzBH8ZYp4nU9zmq8wyRUsg6WdThLihRaE", // Replace with your actual API key
          },
        }
      );

      console.log(response);

      if (response.status === 200) {
        toast.success("Data sent successfully");
        setTimeout(() => {
          navigate("/#steps");
        }, 1000);
      } else {
        toast.error("Error in sending account");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error in sending account");
      return;
    }

    nameRef.current.value = "";
    contRef.current.value = "";
    emailRef.current.value = "";
    accountRef.current.value = "";
    IFSCRef.current.value = "";
    upiRef.current.value = "";
  };

  return (
    <>
      <div className=" w-screen h-screen bg-zinc-950 flex gap-4 justify-between items-center pr-10 ">
        <div className="w-20 h-[90%] bg-[#9BE36D] flex flex-col rounded-e-3xl items-center">
          <Menu />
          <div></div>
        </div>
        <div className="w-[40%] h-[90%] bg-transparent flex flex-col rounded-3xl items-center justify-center">
          <img src={quote} alt="" className=" w-[40%] mb-20" />
          <div className=" flex flex-col gap-0 ">
            <h1 className=" text-white text-[4rem] font-bodyFont font-bold">
              Navigating Your
            </h1>
            <h1 className=" text-white text-[4rem] font-bodyFont font-bold">
              Financial Future
            </h1>
          </div>
        </div>
        <div className="w-[50%] h-[90%] bg-[#9BE36D] flex flex-col rounded-3xl">
          <div className="w-full flex p-6 justify-between items-center">
            <div className="w-28">
              <img src={logo} alt="" />
            </div>
            <div>
              <h4 className="text-[#267BBD]">Already have an account ?</h4>
            </div>
          </div>
          <div className=" justify-center items-center py-16 px-16 ">
            <h1 className=" w-full text-left text-xl sm:text-2xl md:text-4xl font-titleFont font-bold mb-8">
              <span className=" text-[#267BBD]"> Enter</span> Your Details
            </h1>
            <div className="grid  grid-cols-2 justify-center items-center gap-y-8 gap-x-2 sm:gap-x-4 mb-10 ">
              <div className="flex flex-col gap-2 relative">
                <h4> Account Holder Name</h4>
                <input
                  placeholder="xxxxxxxxxxxxx"
                  className=" w-full h-8 px-2 drop-shadow-md shadow-md"
                  name="name"
                  type="text"
                  ref={nameRef}
                  required
                />
              </div>{" "}
              <div className="flex flex-col gap-2 relative">
                <h4> Account No</h4>
                <input
                  required
                  placeholder="xxxxxxxxxxxxx"
                  className=" w-full h-8 px-2 drop-shadow-md shadow-md"
                  name="AccountNo"
                  type="number"
                  ref={accountRef}
                />
              </div>{" "}
              <div className="flex flex-col gap-2 relative">
                <h4> IFSC Code</h4>
                <input
                  required
                  placeholder="xxxxxxxxxxxxx"
                  className=" w-full h-8 px-2 drop-shadow-md shadow-md"
                  name="IFSC"
                  type="text"
                  ref={IFSCRef}
                />
              </div>{" "}
              <div className="flex flex-col gap-2 relative">
                <h4> UPI</h4>
                <input
                  placeholder="xxxxxxxxxxxxx"
                  className=" w-full h-8 px-2 drop-shadow-md shadow-md"
                  name="UPI"
                  type="text"
                  ref={upiRef}
                />
              </div>{" "}
              <div className="flex flex-col gap-2 relative">
                <h4>Email</h4>
                <input
                  placeholder="xxxxxxxxxxxxx"
                  className=" w-full h-8 px-2 drop-shadow-md shadow-md"
                  name="Email"
                  type="email"
                  ref={emailRef}
                  required
                />
              </div>{" "}
              <div className="flex flex-col gap-2 relative">
                <h4> Contact</h4>
                <input
                  placeholder="xxxxxxxxxxxxx"
                  className=" w-full h-8 px-2 drop-shadow-md shadow-md"
                  name="Conatct"
                  required
                  type="tel"
                  ref={contRef}
                />
              </div>
            </div>

            <div className=" w-full flex justify-end gap-5 pr-4">
              <button
                onClick={getData}
                className="cursor-pointer transition-all bg-sky-700 text-white px-6 py-2 rounded-full
          border-sky-900
          border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px] items-end justify-end"
              >
                <input type="Submit" />
              </button>
            </div>

            <ToastContainer
              position="top-center"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
