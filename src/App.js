import "./App.css";
import React from "react";
import { CircularProgress } from "@material-ui/core";
import SelectBox from "./components/SelectBox";
import UserAxios from "./components/UserAxios";
import Container from "@material-ui/core/Container";
// import DataGrid from "./components/DataGrid";

function App() {
  const { kindergarden } = UserAxios();
  if (!kindergarden) return <CircularProgress />;

  return (
    <Container>
      <SelectBox />
      {/* <DataGrid /> */}
    </Container>
  );
}

export default App;
