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

const TableInTabsKindergardenBuilding = () => (
  <div>
    <Table bordered style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <th>건축년도</th>
          <th>건물층수</th>
          <th>전용면적</th>
          <th>총면적</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">학급수</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  </div>
);
export default TableInTabsKindergardenBuilding;
