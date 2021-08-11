import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ yearOfWork }) => {
  const yy1_undr_thcnt = yearOfWork.yy1_undr_thcnt;
  const yy1_abv_yy2_undr_thcnt = yearOfWork.yy1_abv_yy2_undr_thcnt;
  const yy2_abv_yy4_undr_thcnt = yearOfWork.yy2_abv_yy4_undr_thcnt;
  const yy4_abv_yy6_undr_thcnt = yearOfWork.yy4_abv_yy6_undr_thcnt;
  const yy6_abv_thcnt = yearOfWork.yy6_abv_thcnt;

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
        data: [
          yy1_undr_thcnt,
          yy1_abv_yy2_undr_thcnt,
          yy2_abv_yy4_undr_thcnt,
          yy4_abv_yy6_undr_thcnt,
          yy6_abv_thcnt,
        ],
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

  return (
    <>
      <Doughnut data={data} />
    </>
  );
};

export default DoughnutChart;
