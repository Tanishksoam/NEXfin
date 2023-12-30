import React, { useRef } from "react";
import { useState } from "react";

const PayTable = () => {
  const [state, setState] = useState([
    {
      name: "NAME",
      cont: "CONTACT",
      email: "EMAIL",
      message: "MESSAGE",
      amount: "AMOUNT",
      reminderDate: "REMINDER DATE",
    },
  ]);
  const nameRef = useRef("");
  const contRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");
  const amountRef = useRef("");
  const reminderDateRef = useRef("");

  console.log(state);

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
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className=" w-4/5 text-center py-16">
        <h1 className=" text-6xl text-gray-800 font-titleFont ">
          Enter details of your Customers
        </h1>
      </div>
      <>
        <div id="inputs" className=" w-4/5 grid grid-cols-3 col-span-5">
          <div className="input-container">
            <input
              placeholder="Name"
              className="input-field"
              name="name"
              type="text"
              ref={nameRef}
            />
            <label htmlFor="input-field" className="input-label">
              Name
            </label>
            <span className="input-highlight"></span>
          </div>
          <div className="input-container">
            <input
              placeholder="Contact"
              className="input-field"
              name="contact"
              type="text"
              ref={contRef}
            />
            <label htmlFor="input-field" className="input-label">
              Contact
            </label>
            <span className="input-highlight"></span>
          </div>
          <div className="input-container">
            <input
              name="email"
              placeholder="Email"
              className="input-field"
              type="text"
              ref={emailRef}
            />
            <label htmlFor="input-field" className="input-label">
              Email
            </label>
            <span className="input-highlight"></span>
          </div>
          <div className="input-container">
            <input
              placeholder="Message (optional)"
              name="message"
              className="input-field"
              type="text"
              ref={messageRef}
            />
            <label htmlFor="input-field" className="input-label">
              Message
            </label>
            <span className="input-highlight"></span>
          </div>
          <div className="input-container">
            <input
              placeholder="Amount"
              name="amount"
              className="input-field"
              type="text"
              ref={amountRef}
            />
            <label htmlFor="input-field" className="input-label">
              Amount
            </label>
            <span className="input-highlight"></span>
          </div>
          <div className="input-container">
            <input
              name="reminderDate"
              placeholder="Reminder Date"
              className="input-field"
              type="text"
              ref={reminderDateRef}
            />
            <label htmlFor="input-field" className="input-label">
              Reminder Date
            </label>
            <span className="input-highlight"></span>
          </div>
        </div>
        <div className=" w-4/5 flex justify-end gap-5 pb-4">
          <button
            onClick={handleOnClick}
            className="cursor-pointer transition-all bg-sky-700 text-white px-6 py-2 rounded-2xl border-sky-900 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Add
          </button>
          <button className="cursor-pointer transition-all bg-sky-700 text-white px-6 py-2 rounded-2xl border-sky-900 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            Submit
          </button>
        </div>
        <div className=" flex flex-col gap-5 overflow-scroll">
          {state.map((item) => (
            <div className=" flex flex-row gap-10">
              <div className=" w-48 h-11 flex bg-slate-200 rounded-full items-center justify-center text-center  ">
                <h1>{item.name}</h1>
              </div>
              <div className=" w-48 h-11 flex bg-slate-200 rounded-full items-center justify-center text-center  ">
                <h1>{item.cont}</h1>
              </div>
              <div className=" w-48 h-11 flex bg-slate-200 rounded-full items-center justify-center text-center  ">
                <h1>{item.email}</h1>
              </div>
              <div className=" w-48 h-11 flex bg-slate-200 rounded-full items-center justify-center text-center  ">
                <h1>{item.message}</h1>
              </div>
              <div className=" w-48 h-11 flex bg-slate-200 rounded-full items-center justify-center text-center  ">
                <h1>{item.amount}</h1>
              </div>
              <div className=" w-48 h-11 flex bg-slate-200 rounded-full items-center justify-center text-center  ">
                <h1>{item.reminderDate}</h1>
              </div>
            </div>
          ))}
        </div>
      </>
      ;
    </div>
  );
};

export default PayTable;
