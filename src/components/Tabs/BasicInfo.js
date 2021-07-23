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

const TableInTabsKindergardenBasicInfo = () => (
  <div>
    <Table bordered style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <th>연령</th>
          <th>만 3세</th>
          <th>만 4세</th>
          <th>만 5세</th>
          <th>특수</th>
          <th>혼합</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">학급수</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">유아수</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  </div>
);
export default TableInTabsKindergardenBasicInfo;
