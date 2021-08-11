import React from "react";
import { Doughnut } from "react-chartjs-2";

const TeacherLicense = ({ teachersInfo }) => {
  const rgth_gd1_qacnt = teachersInfo.rgth_gd1_qacnt;
  const rgth_gd2_qacnt = teachersInfo.rgth_gd2_qacnt;
  const data = {
    labels: ["정교사 1급", "정교사 2급"],
    datasets: [
      {
        label: "자격증현황",
        data: [rgth_gd1_qacnt, rgth_gd2_qacnt],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
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

export default TeacherLicense;
