import React from "react";
import axios from "axios";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Client = () => {
  const [state, setState] = useState();

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
        "https://nexfin-6b44a-default-rtdb.firebaseio.com/User.json",
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
        console.log("Message sent successfully");
      } else {
        console.log("Error in sending account");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error in sending account");
      return;
    }
    toast.success("Data sent successfully");
  };

  return (
    <div className=" justify-center items-center py-16">
      <form className="w-2/3 border-2 mx-auto py-12 rounded-3xl">
        <h1 className=" w-full text-center text-3xl font-titleFont font-semibold pb-2">
          Your Details
        </h1>
        <div className="grid  grid-cols-2 justify-center items-center gap-y-8 gap-x-4 ">
          <div className="input-container">
            <input
              placeholder="Name"
              className="input-field"
              name="name"
              type="text"
              ref={nameRef}
            />
            <label htmlFor="input-field" className="input-label">
              Account Holder Name
            </label>
            <span className="input-highlight"></span>
          </div>
          <div className="input-container">
            <input
              placeholder="AccountNo"
              className="input-field"
              name="AccountNo"
              type="text"
              ref={accountRef}
            />
            <label htmlFor="input-field" className="input-label">
              Accoun No.
            </label>
            <span className="input-highlight"></span>
          </div>
          <div className="input-container">
            <input
              placeholder="IFSC"
              className="input-field"
              name="IFSC"
              type="text"
              ref={IFSCRef}
            />
            <label htmlFor="input-field" className="input-label">
              IFSC Code
            </label>
            <span className="input-highlight"></span>
          </div>
          <div className="input-container">
            <input
              placeholder="UPI"
              className="input-field"
              name="UPI"
              type="text"
              ref={upiRef}
            />
            <label htmlFor="input-field" className="input-label">
              UPI Id
            </label>
            <span className="input-highlight"></span>
          </div>
          <div className="input-container">
            <input
              placeholder="Email"
              className="input-field"
              name="Email"
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
              placeholder="Conatct"
              className="input-field"
              name="Conatct"
              type="text"
              ref={contRef}
            />
            <label htmlFor="input-field" className="input-label">
              Conatct
            </label>
            <span className="input-highlight"></span>
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
      </form>
    </div>
  );
};

export default Client;
