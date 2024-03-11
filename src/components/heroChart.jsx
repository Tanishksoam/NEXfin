import Chart from "chart.js/auto";
import React from "react";

(async function () {
  const data = [
    { year: "Aug", count: 10 },
    { year: "Sept", count: 30 },
    { year: "Oct", count: 15 },
    { year: "Nov", count: 20 },
    { year: "Dec", count: 10 },
    { year: "Jan", count: 40 },
    { year: "Feb", count: 50 },
  ];

  new Chart(document.getElementById("acquisitions"), {
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
})();

const HeroChart = () => {
  return (
    <div>
      <canvas id="acquisitions" width="400" height="200"></canvas>
      <div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
      </div>
    </div>
  );
};

export default HeroChart;
