import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import GuKindergarden from "./GuKindergarden";
import { DataGrid } from "@material-ui/data-grid";
import DataGridTable from "./DataGridTable";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogSelect() {
  const classes = useStyles();
  const [kindergarden, setKindergarden] = useState();
  const [open, setOpen] = React.useState(false);
  const [gu, setGu] = React.useState("");
  const API_URL = `/api/notice/basicInfo.do?key=6a148abff9f84168ab54e07b3a55b594&sidoCode=41&sggCode=${gu}`;

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      // 응답(성공)
      .then((response) => {
        setKindergarden(response);
        console.log(response);
      })
      // 응답(실패)
      .catch(function (error) {
        console.log(error);
      })
      // 응답(항상 실행)
      .finally(function () {
        // ...
      });
    console.log(kindergarden);
  }, [gu]);

  const handleChange = (event) => {
    setGu(event.target.value || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>지역 선택하기</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>지역 선택하기</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">성남시</InputLabel>
              <Select
                native
                value={gu}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={41131}>성남시 수정구</option>
                <option value={41133}>성남시 중원구</option>
                <option value={41135}>성남시 분당구</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      {console.log(gu)}
      <GuKindergarden kindergarden={kindergarden} />
      <DataGridTable kindergarden={kindergarden} />
    </div>
  );
}
