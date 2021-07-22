import React from "react";
import { Table } from "reactstrap";

const TableInTabsSchoolBus = (props) => {
  return (
    <Table bordered style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <th>차량여부</th>
          <th>9인승</th>
          <th>12인승</th>
          <th>15인승</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>Otto</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableInTabsSchoolBus;
