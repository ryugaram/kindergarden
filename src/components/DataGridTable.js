import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { CircularProgress } from "@material-ui/core";

export default function DataGridTable({ kindergarden }) {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "유치원",
      headerName: "유치원",
      width: 200,
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
      field: "공립_사립",
      headerName: "공립_사립",
      width: 150,
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
      description: "정렬 불가능한 행입니다.",
      sortable: false,
      width: 300,
    },
  ];
  if (!kindergarden) return <CircularProgress />;

  let myArray = new Array();
  console.log(kindergarden);

  kindergarden.data.kinderInfo.forEach((element) => {
    myArray.push({
      id: element.key,
      유치원: element.kindername,
      설립연도: element.odate,
      공립_사립: element.establish,
      운영시간: element.opertime,
      주소: element.addr,
    });
  });

  console.log(myArray);

  const rows = [...myArray];

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
