import React from "react";

const PayTable = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className=" w-4/5 text-center py-16">
        <h1 className=" text-6xl text-gray-800 font-titleFont ">
          Enter details of your Customers
        </h1>
      </div>
      <div id="inputs" className=" w-4/5 grid grid-cols-3 col-span-5">
        <div className="input-container">
          <input placeholder="Name" className="input-field" type="text" />
          <label htmlFor="input-field" className="input-label">
            Name
          </label>
          <span className="input-highlight"></span>
        </div>
        <div className="input-container">
          <input placeholder="Contact" className="input-field" type="text" />
          <label htmlFor="input-field" className="input-label">
            Contact
          </label>
          <span className="input-highlight"></span>
        </div>
        <div className="input-container">
          <input placeholder="Email" className="input-field" type="text" />
          <label htmlFor="input-field" className="input-label">
            Email
          </label>
          <span className="input-highlight"></span>
        </div>
        <div className="input-container">
          <input
            placeholder="Message (optional)"
            className="input-field"
            type="text"
          />
          <label htmlFor="input-field" className="input-label">
            Message
          </label>
          <span className="input-highlight"></span>
        </div>
        <div className="input-container">
          <input placeholder="Amount" className="input-field" type="text" />
          <label htmlFor="input-field" className="input-label">
            Amount
          </label>
          <span className="input-highlight"></span>
        </div>
        <div className="input-container">
          <input
            placeholder="Reminder Date"
            className="input-field"
            type="text"
          />
          <label htmlFor="input-field" className="input-label">
            Reminder Date
          </label>
          <span className="input-highlight"></span>
        </div>
      </div>
      <div className=" w-4/5 flex justify-end gap-5 pb-4">
        <button
          class="cursor-pointer transition-all bg-sky-700 text-white px-6 py-2 rounded-2xl
border-sky-900
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Add
        </button>
        <button
          class="cursor-pointer transition-all bg-sky-700 text-white px-6 py-2 rounded-2xl
border-sky-900
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PayTable;
