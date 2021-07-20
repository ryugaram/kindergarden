import React from "react";
import { Table } from "reactstrap";

// const colors = [
//   "red",
//   "orange",
//   "yellow",
//   "olive",
//   "green",
//   "teal",
//   "blue",
//   "violet",
//   "purple",
//   "pink",
//   "brown",
//   "grey",
//   "black",
// ];

const TableInTabsKindergardenClassArea = () => (
  <div style={{}}>
    <Table bordered style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <th>교실수</th>
          <th>교실면적</th>
          <th>체육장</th>
          <th>보건/위생공간</th>
          <th>조리실/급식공간</th>
          <th>기타공간</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>Otto</td>
        </tr>
      </tbody>
    </Table>
  </div>
);
export default TableInTabsKindergardenClassArea;
