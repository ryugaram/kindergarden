import React from "react";
import { Table } from "reactstrap";

const Building = ({ building }) => {
  const archyy = building.archyy;
  const floorcnt = building.floorcnt;
  const bldgprusarea = building.bldgprusarea;
  const grottar = building.grottar;

  return (
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
            <td scope="row">{archyy}</td>
            <td>{floorcnt}</td>
            <td>{bldgprusarea}</td>
            <td>{grottar}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Building;
