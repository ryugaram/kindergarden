import "./App.css";
import React from "react";
import { CircularProgress } from "@material-ui/core";
import SelectBox from "./components/SelectBox";
import UserAxios from "./components/UserAxios";
import Container from "@material-ui/core/Container";
import DaumMapTest from "./components/DaumMapTest";
import DetailTable from "./components/DetailTable";
import TableInTabsKindergardenBasicInfo from "./components/Tabs/TableInTabsKindergardenBasicInfo";
import KategorieTabs from "./components/KategorieTabs";
import TableInTabsKindergardenBuilding from "./components/Tabs/TableInTabsKindergardenBuilding";
import TableInTabsKindergardenClassArea from "./components/Tabs/TableInTabsKindergardenClassArea";
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
      {/* <DetailTable /> */}
      {/* <TableInTabsKindergardenBasicInfo /> */}
      {/* <TableInTabsKindergardenBuilding /> */}
      {/* <TableInTabsKindergardenClassArea /> */}
      {/* <Sample /> */}
      {/* <TeacherHowLongYears /> */}
    </Container>
  );
}

export default App;
