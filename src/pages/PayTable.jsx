import React from "react";
import { useState } from "react";

const PayTable = () => {
  const [add, setAdd] = useState([
    {
      name: "",
      contact: "",
      email: "",
      message: "",
      amount: "",
      reminderDate: "",
    },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    console.log(name, value);
    const list = [...add];
    list[index][name] = value;
    setAdd(list);
  };
  const handleOnclick = () => {
    setAdd([
      ...add,
      {
        name: "",
        contact: "",
        email: "",
        message: "",
        amount: "",
        reminderDate: "",
      },
    ]);

    console.log(add);
  };

  return (
    <form className="w-full flex flex-col justify-center items-center">
      <div className=" w-4/5 text-center py-16">
        <h1 className=" text-6xl text-gray-800 font-titleFont ">
          Enter details of your Customers
        </h1>
      </div>
      {add.map((x, i) => {
        return(
           <><div id="inputs" className=" w-4/5 grid grid-cols-3 col-span-5">
            <div className="input-container">
              <input
                placeholder="Name"
                className="input-field"
                name="name"
                type="text"
                onChange={(e) => handleInputChange(e, i)} />
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
                onChange={(e) => handleInputChange(e, i)} />
              <label htmlFor="input-field" className="input-label">
                Contact
              </label>
              <span className="input-highlight"></span>
            </div>
            <div className="input-container">
              <input
                onChange={(e) => handleInputChange(e, i)}
                name="email"
                placeholder="Email"
                className="input-field"
                type="text" />
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
                onChange={(e) => handleInputChange(e, i)}
                type="text" />
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
                onChange={(e) => handleInputChange(e, i)}
                type="text" />
              <label htmlFor="input-field" className="input-label">
                Amount
              </label>
              <span className="input-highlight"></span>
            </div>
            <div className="input-container">
              <input
                onChange={(e) => handleInputChange(e, i)}
                name="reminderDate"
                placeholder="Reminder Date"
                className="input-field"
                type="text" />
              <label htmlFor="input-field" className="input-label">
                Reminder Date
              </label>
              <span className="input-highlight"></span>
            </div>
          </div><div className=" w-4/5 flex justify-end gap-5 pb-4">
              <button
                onClick={handleOnclick}
                className="cursor-pointer transition-all bg-sky-700 text-white px-6 py-2 rounded-2xl border-sky-900 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                Add
              </button>
              <button className="cursor-pointer transition-all bg-sky-700 text-white px-6 py-2 rounded-2xl border-sky-900 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                Submit
              </button>
            </div></>

        )
      }
      )};
    </form>
  );
};

export default PayTable;
