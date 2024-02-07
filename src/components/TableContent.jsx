import React, { useState, useEffect } from "react";

const TableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://nexfin-6b44a-default-rtdb.firebaseio.com/UserData/Tanishk%20Soam.json";

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
    <div className=" w-full min-h-[50vh] flex flex-col items-center justify-center gap-4 bg-slate-200 ">
      <h2 className=" text-3xl font-titleFont font-bold ">User Data Table</h2>
      <table
        className=" w-4/5 border-[1px] border-gray-500 rounded-2xl py-4 overflow-hidden"
        border="3"
      >
        <thead>
          <tr className=" text-center text-xl bg-sky-700 text-white font-bodyFont overflow-hidden gap-2">
            <th>Name</th>
            <th>Amount</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Message</th>
            <th>Reminder Date</th>
          </tr>
        </thead>
        <tbody className=" text-center text-lg">
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
