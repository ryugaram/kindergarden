import React from "react";
import { Table } from "semantic-ui-react";

const colors = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
  "black",
];

const TableInTabs = () => (
  <div>
    <Table color="red" key="red">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>연령</Table.HeaderCell>
          <Table.HeaderCell>만 3세</Table.HeaderCell>
          <Table.HeaderCell>만 4세</Table.HeaderCell>
          <Table.HeaderCell>만 5세</Table.HeaderCell>
          <Table.HeaderCell>특수</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>학급수</Table.Cell>
          <Table.Cell>200</Table.Cell>
          <Table.Cell>0g</Table.Cell>
          <Table.Cell>0g</Table.Cell>
          <Table.Cell>0g</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>아동수</Table.Cell>
          <Table.Cell>310</Table.Cell>
          <Table.Cell>0g</Table.Cell>
          <Table.Cell>0g</Table.Cell>
          <Table.Cell>0g</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);
export default TableInTabs;
