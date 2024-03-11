import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { year: "Aug", count: 10 },
      { year: "Sept", count: 20 },
      { year: "Oct", count: 15 },
      { year: "Nov", count: 30 },
      { year: "Dec", count: 22 },
      { year: "Jan", count: 40 },
      { year: "Feb", count: 50 },
    ];

    const ctx = document.getElementById("acquisitions").getContext("2d");

    // Destroy existing chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create new chart instance
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Inflow by month",
            data: data.map((row) => row.count),
            borderColor: "#9BE36D",
            backgroundColor: "#9BE36D",
          },
        ],
      },
    });

    // Cleanup on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []); // Empty dependency array ensures the useEffect runs once when the component mounts

  return (
    <div>
      <canvas id="acquisitions" width="400" height="200"></canvas>
    </div>
  );
};

export default BarChart;
