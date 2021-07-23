import React from "react";
import { Table } from "reactstrap";

const TableInTabsSchoolMeal = (props) => {
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
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableInTabsSchoolMeal;
