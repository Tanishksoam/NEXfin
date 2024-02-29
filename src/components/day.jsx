import React, { useState, useEffect } from "react";
import { format, getDay } from "date-fns";

const TodayIs = () => {
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    // Get the current date
    const currentDate = new Date();

    // Format the date to get the day name
    const formattedDay = format(currentDate, "EEEE");

    // Set the current day
    setCurrentDay(formattedDay);
  }, []);

  return (
    <div>
      <p>Today is {currentDay}</p>
    </div>
  );
};

export default TodayIs;
