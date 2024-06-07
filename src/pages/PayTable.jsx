import React, { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Menu from "../components/menu";
import { plus } from "../assets/images";
import UploadFile from "../components/UploadFile";

const PayTable = () => {
  const navigate = useNavigate();
  const [state, setState] = useState([]);
  const user = useSelector((state) => state.nex.UserInfo);
  const nameRef = useRef("");
  const contRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");
  const amountRef = useRef("");
  const reminderDateRef = useRef("");
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handleOnClick = () => {
    const temp = {
      name: nameRef.current.value,
      cont: contRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      amount: amountRef.current.value,
      reminderDate: reminderDateRef.current.value,
    };
    const arr = [...state];
    arr.push(temp);
    setState(arr);
    nameRef.current.value = "";
    contRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    amountRef.current.value = "";
    reminderDateRef.current.value = "";
  };

  const getData = async () => {
    try {
      for (let i = 0; i < state.length; i++) {
        const { name, cont, email, message, amount, reminderDate } = state[i];

        const response = await axios.post(
          `https://nexfin-6b44a-default-rtdb.firebaseio.com/UserData/${user.name}.json`,
          {
            Name: name,
            contact: cont,
            email,
            message,
            amount,
            reminderDate,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            params: {
              key: "AIzaSyBzBH8ZYp4nU9zmq8wyRUsg6WdThLihRaE",
            },
          }
        );

        if (response.status === 200) {
          console.log(`Message sent for element ${i}`);
        } else {
          console.log(`Error in sending message for element ${i}`);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error in sending message");
      return;
    }
    setState([]);
    toast.success("Data sent");
  };

  return (
    <>
      {visible && <UploadFile visible2={visible} />}

      <div className="w-screen h-screen bg-zinc-950 flex justify-center items-center p-10">
        <div className="w-full h-full bg-[#A3A7F5] rounded-2xl flex flex-col justify-start items-center gap-4">
          <div className="w-full flex px-8">
            <Menu />
          </div>
          <div className="w-full flex justify-end items-center p-10">
            <div className="w-auto flex items-center justify-start relative">
              <div className="w-4 h-4 rounded-full bg-[#9EE96E] absolute z-5 top-[-30px] left-[-80px] "></div>
              <div className="w-4 h-4 rounded-full bg-zinc-900 absolute z-10 top-[-30px] left-[-70px]"></div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center px-20">
            <div c>
              <h4 className="text-4xl">
                Enter details of your{" "}
                <span className="text-white">Customers</span>
              </h4>
            </div>
            <div className="flex gap-8 text-white ">
              <h4>filter</h4>
              <div
                onClick={() => toggleVisible()}
                className="flex hover:text-[#9EE96E] cursor-pointer duration-300"
              >
                upload
              </div>
            </div>
          </div>
          <div className="w-full flex px-20">
            <table className="px-2 overflow-hidden flex flex-col gap-4 ">
              <thead>
                <tr className="flex text-left text-xs sm:text-sm md:text-md bg-transparent text-[#333333] font-titleFont overflow-hidden">
                  <th className="w-64">Name</th>
                  <th className="w-32">Amount</th>
                  <th className="w-32">Contact</th>
                  <th className="w-64">Email</th>
                  <th className="w-32">Reminder Date</th>
                  <th className="w-64">Message</th>
                </tr>
              </thead>

              <tbody className=" flex flex-col gap-2 max-h-[50vh]">
                <tr className=" flex  text-left text-xs sm:text-sm md:text-md bg-transparent text-[#333333] font-titleFont overflow-hidden">
                  <td className=" w-64 min-h-6 flex bg-white items-center justify-center text-left  ">
                    <input
                      className="w-full focus:bg-slate-200 px-2 "
                      placeholder="Name"
                      name="name"
                      type="text"
                      required
                      ref={nameRef}
                    />
                  </td>
                  <td className=" w-32 min-h-6 flex bg-white items-center justify-center text-left  ">
                    <input
                      className="w-full focus:bg-slate-200 px-2 "
                      placeholder="Amount"
                      name="amount"
                      type="number"
                      ref={amountRef}
                      required
                    />
                  </td>
                  <td className=" w-32 min-h-6 flex bg-white items-center justify-center text-left  ">
                    <input
                      className="w-full focus:bg-slate-200 px-2 "
                      placeholder="Contact"
                      name="contact"
                      type="number"
                      required
                      ref={contRef}
                    />
                  </td>
                  <td className=" w-64 min-h-6 flex bg-white items-center justify-center text-left  ">
                    <input
                      className="w-full focus:bg-slate-200 px-2 "
                      name="email"
                      placeholder="Email"
                      type="email"
                      required
                      ref={emailRef}
                    />
                  </td>
                  <td className=" w-32 min-h-6 flex bg-white items-center justify-center text-left  ">
                    <input
                      className="w-full focus:bg-slate-200 px-2 "
                      name="reminderDate"
                      placeholder="Reminder Date"
                      type="date"
                      ref={reminderDateRef}
                      required
                    />
                  </td>
                  <td className=" w-64 min-h-6 flex bg-white items-center justify-center text-left  ">
                    <input
                      className="w-full focus:bg-slate-200 px-2 "
                      placeholder="Message (optional)"
                      name="message"
                      type="text"
                      ref={messageRef}
                    />
                  </td>
                </tr>
                <div className="flex flex-col gap-2 max-h-[40vh] overflow-scroll">
                  {state.map((item, index) => (
                    <tr
                      key={index}
                      className="flex min-h-[20px] w-[100%] text-left text-xs sm:text-sm md:text-md bg-transparent text-[#333333] font-titleFont overflow-hidden"
                    >
                      <td className="w-64 min-h-[20px] flex bg-white items-center justify-center text-left">
                        {item.name}
                      </td>
                      <td className="w-32 min-h-[20px] flex bg-white items-center justify-center text-left">
                        {item.amount}
                      </td>
                      <td className="w-32 min-h-[20px] flex bg-white items-center justify-center text-left">
                        {item.cont}
                      </td>
                      <td className="w-64 min-h-[20px] flex bg-white items-center justify-center text-left">
                        {item.email}
                      </td>
                      <td className="w-32 min-h-[20px] flex bg-white items-center justify-center text-left">
                        {item.reminderDate}
                      </td>
                      <td className="w-64 min-h-[20px] flex bg-white items-center justify-center text-left">
                        {item.message}
                      </td>
                    </tr>
                  ))}
                </div>
              </tbody>
            </table>

            <div className="w-[5%] flex flex-col gap-4 justify-start items-center mt-8">
              <button
                className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center"
                onClick={handleOnClick}
              >
                <img src={plus} className="w-4" alt="" />
              </button>
            </div>
          </div>
          <div className="w-full flex justify-between gap-5 px-20">
            <div className="flex gap-5 pb-4">
              <button
                onClick={getData}
                className="cursor-pointer transition-all bg-sky-700 text-white px-6 py-2 rounded-2xl border-sky-900 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                Submit
              </button>
            </div>
            <div>
              <button
                onClick={() => navigate("/dashboard")}
                className="cursor-pointer transition-all bg-sky-700 text-white px-6 py-2 rounded-2xl border-sky-900 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                Go to profile
              </button>
            </div>
          </div>
        </div>
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
    </>
  );
};

export default PayTable;
