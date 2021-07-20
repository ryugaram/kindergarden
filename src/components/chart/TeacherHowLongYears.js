import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: [
    "1년미만",
    "1년이상 2년미만",
    "2년이상 4년미만",
    "4년이상 6년미만",
    "6년이상",
  ],
  datasets: [
    {
      label: "근속현황",
      data: [1, 2, 3, 4, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => (
  <>
    <Doughnut data={data} />
  </>
);

export default DoughnutChart;
