import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { CircularProgress } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { createHashHistory } from "history";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default function DataGridTable({ kindergarden }) {
  const history = createHashHistory();
  if (!kindergarden) return <CircularProgress />;

  let myArray = new Array();
  console.log(kindergarden);

  function goToSchool(time) {
    return time.substring(0, 6);
  }

  function goToHome(time) {
    return time.substring(7);
  }

  kindergarden.data.kinderInfo.forEach((element) => {
    myArray.push({
      id: element.key,
      유치원: element.kindername,
      설립연도: element.odate,
      공립_사립: element.establish,
      등교시간: goToSchool(element.opertime),
      하교시간: goToHome(element.opertime),
      주소: element.addr,
      링크: "어디로",
    });
  });

  // console.log(myArray[0]);

  const rows = [...myArray];

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "유치원",
      headerName: "유치원",
      width: 200,
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
      width: 130,
      editable: true,
    },

    {
      field: "등교시간",
      headerName: "등교시간",
      width: 125,
      editable: true,
    },
    {
      field: "하교시간",
      headerName: "하교시간",
      width: 125,
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
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={(event) => {
            let id = params.row.id;
            let addr = addrFilterGu(params.row.주소);
            const moveTo = () => {
              history.replace(`/detail/${addr}/${id}`);
            };
            moveTo();
          }}
        >
          이동하기
        </Button>
      ),
    },
  ];

  function addrFilterGu(addr) {
    return addr.substring(8, 10);
  }

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

// GridColumns 로 검색
