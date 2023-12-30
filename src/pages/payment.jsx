import React, { useState } from "react";
import axios from "axios";
import { phonepe } from "../assets/images";

const Payment1 = () => {
  const [form, setForm] = useState({ name: "", number: "" });
  const [amount, setAmount] = useState(0);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("api/phonepe/payment", {
        data: {
          ...form,
          amount: amount,
        },
      })
      .then((response) => {
        window.location.href = response.data;
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className=" w-full h-[70vh] flex flex-col gap-10 justify-center items-center mt-10 mb-10">
      {/* 
        merchant id : PGTESTPAYUAT
        testing salt key : 099eb0cd-02cf-4e2a-8aca-3e6c6aff0399
        salt index : 1
        */}
      <div className=" w-[80%] h-20 flex flex-col justify-center items-center">
        <img src={phonepe} alt="" className=" w-64" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl w-[90%] p-5 border-t-2 border-r-4 border-b-[1px] border-l-[1px]  h-[80%] flex flex-col gap-5 justify-evenly items-center rounded-3xl"
      >
        <div className=" w-[80%] bg-slate-200 p-2 rounded-xl flex justify-center items-center">
          <label className=" w-[20%] ml-4" htmlFor="exampleInputEmail">
            {" "}
            Name
          </label>
          <input
            className=" w-[80%] h-10 rounded-xl"
            type="text"
            name="name"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        <div className=" w-[80%] bg-slate-200 p-2 rounded-xl flex justify-center items-center">
          <label className=" w-[20%] ml-4" htmlFor="exampleInputEmail">
            {" "}
            Number
          </label>
          <input
            className=" w-[80%] h-10 rounded-xl"
            type="text"
            name="name"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
          />
        </div>
        <div className=" w-[80%] bg-slate-200 p-2 rounded-xl flex justify-center items-center">
          <label className=" w-[20%] ml-4" htmlFor="exampleInputEmail">
            {" "}
            Amount
          </label>
          <input
            className=" w-[80%] h-10 rounded-xl"
            type="text"
            name="name"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              const parsedvalue = parseFloat(e.target.value);
              setAmount(parsedvalue);
            }}
          />
        </div>
        <div className=" w-[75%] flex items-end justify-end">
          <button
            className=" w-32 p-4 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition-all"
            type="submit"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment1;
