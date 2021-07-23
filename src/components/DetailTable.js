import React from "react";
import styled from "styled-components";
import DaumMap from "./DaumMap";
import { Table } from "reactstrap";

const DetailTable = (props) => {
  return (
    <>
      <Table bordered>
        <tbody>
          <tr align="center" bgcolor="white">
            <th>유치원명</th>
            <td>100원</td>
            <td rowspan="7">
              <DaumMap />
            </td>
          </tr>
          <tr align="center" bgcolor="white">
            <th>원장명</th>
            <td>100원</td>
          </tr>
          <tr align="center" bgcolor="white">
            <th>설립일</th>
            <td>100원</td>
          </tr>
          <tr align="center" bgcolor="white">
            <th>전화번호</th>
            <td>100원</td>
          </tr>

          <tr align="center" bgcolor="white">
            <th>홈페이지</th>
            <td>100원</td>
          </tr>
          <tr align="center" bgcolor="white">
            <th>운영시간</th>
            <td>100원</td>
          </tr>
          <tr align="center" bgcolor="white">
            <th>주소</th>
            <td>100원</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default DetailTable;
