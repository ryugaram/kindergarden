import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { CircularProgress } from "@material-ui/core";

export default function DataGridTable({ kindergarden }) {
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "유치원",
      headerName: "유치원",
      width: 220,
      editable: true,
      sortable: false,
      description: "정렬 불가능한 행입니다.",
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
    {
      field: "링크",
      headerName: "링크",
      width: 110,
      editable: false,
      sortable: false,
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
      링크: "자세히",
    });
  });

  console.log(myArray[0]);

  // myArray[0].링크.onClick = function () {
  //   console.log("gg");
  // };

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
