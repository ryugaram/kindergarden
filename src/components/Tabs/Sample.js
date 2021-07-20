import React from "react";
import { Table } from "reactstrap";

const Example = (props) => {
  return (
    <Table bordered style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Username</th>
          <th>Username</th>
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
  );
};

export default Example;
