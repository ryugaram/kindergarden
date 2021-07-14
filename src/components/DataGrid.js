import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "유치원",
    headerName: "유치원",
    width: 150,
    editable: true,
    sortable: false,
  },
  {
    field: "설립연도",
    headerName: "설립연도",
    width: 140,
    editable: true,
  },
  {
    field: "공립/사립",
    headerName: "공립/사립",
    width: 150,
    editable: true,
  },
  {
    field: "유치원생",
    headerName: "유치원생",
    width: 140,
    editable: true,
  },
  {
    field: "학급",
    headerName: "학급",
    width: 110,
    editable: true,
  },
  {
    field: "운영시간",
    headerName: "운영시간",
    width: 150,
    editable: true,
  },
  {
    field: "주소",
    headerName: "주소",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
];

export default function DataGridDemo({ kindergarden }) {
  const rows = [
    { id: 1, 유치원: "20201212", firstName: "Jon", age: 35 },
    { id: 2, 유치원: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, 유치원: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, 유치원: "Stark", firstName: "Arya", age: 16 },
    { id: 5, 유치원: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, 유치원: "Melisandre", firstName: null, age: 150 },
    { id: 7, 유치원: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, 유치원: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, 유치원: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
