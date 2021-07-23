import "./App.css";
import React from "react";
import { CircularProgress } from "@material-ui/core";
import SelectBox from "./components/SelectBox";
import UserAxios from "./components/UserAxios";
import Container from "@material-ui/core/Container";
import DaumMapTest from "./components/DaumMap";
import DetailTable from "./components/DetailTable";
import BasicInfo from "./components/Tabs/BasicInfo";
import KategorieTabs from "./components/KategorieTabs";
import Building from "./components/Tabs/Building";
import ClassArea from "./components/Tabs/ClassArea";
import Sample from "./components/Tabs/Sample";
import TeacherCount from "./components/chart/TeacherCount";
import TeacherLicense from "./components/chart/TeacherLicense";
import TeacherHowLongYears from "./components/chart/TeacherHowLongYears";

function App() {
  // const { kindergarden } = UserAxios();
  // if (!kindergarden) return <CircularProgress />;

  return (
    <Container>
      {/* <KategorieTabs /> */}
      <SelectBox />
      {/* <DetailTable />
      <BasicInfo />
      <Building />
      <ClassArea />
      <Sample />
      <TeacherHowLongYears /> */}
    </Container>
  );
}

export default App;
