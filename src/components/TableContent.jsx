import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const TableComponent = () => {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.nex.UserInfo);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://nexfin-6b44a-default-rtdb.firebaseio.com/UserData/${user.name}.json`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        const dataArray = Object.values(jsonData);
        console.log(dataArray); // Convert object values to an array
        setData(dataArray);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" w-full min-h-[50vh] flex flex-col items-start justify-start gap-4 bg-slate-200 overflow-scroll ">
      <h2 className=" text-3xl font-titleFont mx-auto text-center font-bold ">
        User Data Table
      </h2>
      <table className=" w-4/5 border-[1px] border-gray-500 rounded-2xl  px-2 overflow-hidden">
        <thead>
          <tr className=" text-center text-sm sm:text-md md:text-xl bg-sky-700 text-white px-2 font-bodyFont gap-2 overflow-hidden">
            <th className="px-2">Name</th>
            <th className="px-2">Amount</th>
            <th className="px-2">Contact</th>
            <th className="px-2">Email</th>
            <th className="px-2">Message</th>
            <th className="px-2">Reminder Date</th>
          </tr>
        </thead>
        <tbody className=" text-center text-xs sm:text-sm md:text-lg px-4">
          {data.map(
            (item, index) => (
              console.log(item),
              (
                <tr key={index}>
                  <td>{item.Name}</td>
                  <td>{item.amount}</td>
                  <td>{item.contact}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
                  <td>{item.reminderDate}</td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
