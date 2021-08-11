import React from "react";
import styled from "styled-components";
import DaumMap from "../DaumMap";
import { Table } from "reactstrap";

const BasicInfo = ({ basicInfo }) => {
  const addr = basicInfo.addr;
  const kindername = basicInfo.kindername;
  const rppnname = basicInfo.rppnname;
  const edate = basicInfo.edate;
  const telno = basicInfo.telno;
  const opertime = basicInfo.opertime;

  return (
    <>
      <Table bordered>
        <tbody vertical-align="middle" className="align-middle">
          <tr align="center" bgcolor="white">
            <th>유치원명</th>
            <td>{kindername}</td>
            <td rowspan="7">
              <DaumMap addr={addr} kindername={kindername} />
            </td>
          </tr>
          <tr align="center" bgcolor="white">
            <th>원장명</th>
            <td>{rppnname}</td>
          </tr>
          <tr align="center" bgcolor="white">
            <th>설립일</th>
            <td>{edate}</td>
          </tr>
          <tr align="center" bgcolor="white">
            <th>전화번호</th>
            <td>{telno}</td>
          </tr>

          <tr align="center" bgcolor="white">
            <th>운영시간</th>
            <td>{opertime}</td>
          </tr>
          <tr align="center" bgcolor="white">
            <th>주소</th>
            <td>{addr}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default BasicInfo;
