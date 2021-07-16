import "./App.css";
import React from "react";
import { CircularProgress } from "@material-ui/core";
import SelectBox from "./components/SelectBox";
import UserAxios from "./components/UserAxios";
import Container from "@material-ui/core/Container";
import DaumMapTest from "./components/DaumMapTest";

function App() {
  const { kindergarden } = UserAxios();
  if (!kindergarden) return <CircularProgress />;

  return (
    <Container>
      <SelectBox />
      <DaumMapTest />
    </Container>
  );
}

export default App;

//b57ee830b8117d0ab225e92b2d34667e
