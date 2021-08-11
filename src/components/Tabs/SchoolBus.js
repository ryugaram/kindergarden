import React from "react";
import { Table } from "reactstrap";

const TableInTabsSchoolBus = ({ schoolBus }) => {
  const vhcl_oprn_yn = schoolBus.vhcl_oprn_yn;
  const psg9_dclr_vhcnt = schoolBus.psg9_dclr_vhcnt;
  const psg12_dclr_vhcnt = schoolBus.psg12_dclr_vhcnt;
  const psg15_dclr_vhcnt = schoolBus.psg15_dclr_vhcnt;

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
          <th scope="row">{vhcl_oprn_yn}</th>
          <td>{psg9_dclr_vhcnt}</td>
          <td>{psg12_dclr_vhcnt}</td>
          <td>{psg15_dclr_vhcnt}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableInTabsSchoolBus;
