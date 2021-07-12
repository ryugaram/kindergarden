import "./App.css";
import React from "react";
import { CircularProgress } from "@material-ui/core";
import SelectBoxTest from "./components/SelectBoxTest";
import UserAxios from "./components/UserAxios";

function App() {
  const { kindergarden } = UserAxios();
  if (!kindergarden) return <CircularProgress />;

  return (
    <div className="App">
      test
      <SelectBoxTest />
    </div>
  );
}

export default App;
