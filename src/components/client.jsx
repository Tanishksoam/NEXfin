import React from "react";

const Client = () => {
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
            />
            <label htmlFor="input-field" className="input-label">
              Conatct
            </label>
            <span className="input-highlight"></span>
          </div>
        </div>
        <div className=" w-full flex justify-end gap-5 pr-4">
          <button
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
