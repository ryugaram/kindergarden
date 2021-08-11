import React from "react";
import { Table } from "reactstrap";

const TableInTabsSchoolMeal = ({ schoolMeal }) => {
  const mlsr_oprn_way_tp_cd = schoolMeal.mlsr_oprn_way_tp_cd;
  const mlsr_kpcnt = schoolMeal.mlsr_kpcnt;
  const ntrt_tchr_agmt_yn = schoolMeal.ntrt_tchr_agmt_yn;

  return (
    <Table bordered style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <th>운영방식</th>
          <th>급식원아수</th>
          <th>영양교사배치</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{mlsr_oprn_way_tp_cd}</th>
          <td>{mlsr_kpcnt}</td>
          <td>{ntrt_tchr_agmt_yn}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableInTabsSchoolMeal;
