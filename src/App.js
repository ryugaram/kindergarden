import "./App.css";
import React from "react";
import { CircularProgress } from "@material-ui/core";
import SelectBox from "./components/SelectBox";
import UserAxios from "./components/UserAxios";
import Container from "@material-ui/core/Container";
import DaumMapTest from "./components/DaumMapTest";
import DetailTable from "./components/DetailTable";
import TableInTabs from "./components/TableInTabs";
import KategorieTabs from "./components/KategorieTabs";

function App() {
  const { kindergarden } = UserAxios();
  if (!kindergarden) return <CircularProgress />;

  return (
    <Container>
      <KategorieTabs />
      <SelectBox />
      <DetailTable />
      <TableInTabs />
    </Container>
  );
}

export default App;
