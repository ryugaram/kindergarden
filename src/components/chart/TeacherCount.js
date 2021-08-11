import React from "react";
import { Bar } from "react-chartjs-2";

const VerticalBar = ({ teachersInfo }) => {
  console.log(teachersInfo);

  const asps_thcnt = teachersInfo.asps_thcnt;
  const gnrl_thcnt = teachersInfo.gnrl_thcnt;
  const spcn_thcnt = teachersInfo.spcn_thcnt;
  const ntcnt = teachersInfo.ntcnt;
  const shcnt_thcnt = teachersInfo.shcnt_thcnt;

  const data = {
    labels: [
      "보직교사수",
      "일반교사수",
      "특수교사수",
      "보건교사수",
      "기간제교사",
    ],
    datasets: [
      {
        label: "교사수현황",
        data: [asps_thcnt, gnrl_thcnt, spcn_thcnt, ntcnt, shcnt_thcnt],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default VerticalBar;
