import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import BasicInfo from "../../components/Tabs/BasicInfo";
import Building from "../../components/Tabs/Building";
import TeacherCount from "../../components/chart/TeacherCount";
import SchoolMeal from "../../components/Tabs/SchoolMeal";
import SchoolBus from "../../components/Tabs/SchoolBus";
import TeacherHowLongYears from "../../components/chart/TeacherHowLongYears";

const DetailPage = () => {
  // 파라미터로 구코드 추출
  let { addr, id } = useParams();
  id = Number(id) - 1; //배열때문에
  let result;
  if (addr == "분당") {
    result = 41135;
  } else if (addr == "수정") {
    result = 41131;
  } else {
    result = 41133;
  }

  // axios

  const [basicInfo, setBasicInfo] = useState(false);
  const [building, setBuilding] = useState(null);
  const [classArea, setClassArea] = useState(null);
  const [teachersInfo, setTeachersInfo] = useState(null);
  const [lessonDay, setLessonDay] = useState(false);
  const [schoolMeal, setSchoolMeal] = useState(null);
  const [schoolBus, setSchoolBus] = useState(null);
  const [yearOfWork, setYearOfWork] = useState(null);
  const [safetyEdu, setSafetyEdu] = useState(false);
  const [deductionSociety, setDeductionSociety] = useState(null);

  const API_URL_BASICINFO = `/api/notice/basicInfo.do?key=6a148abff9f84168ab54e07b3a55b594&sidoCode=41&sggCode=${result}`;
  const API_URL_BUILDING = `/api/notice/building.do?key=6a148abff9f84168ab54e07b3a55b594&sidoCode=41&sggCode=${result}`;
  const API_URL_CLASSAREA = `/api/notice/classArea.do?key=6a148abff9f84168ab54e07b3a55b594&sidoCode=41&sggCode=${result}`;
  const API_URL_TEACHERSINFO = `/api/notice/teachersInfo.do?key=6a148abff9f84168ab54e07b3a55b594&sidoCode=41&sggCode=${result}`;
  const API_URL_LESSONDAY = `/api/notice/lessonDay.do?key=6a148abff9f84168ab54e07b3a55b594&sidoCode=41&sggCode=${result}`;
  const API_URL_SCHOOLMEAL = `/api/notice/schoolMeal.do?key=6a148abff9f84168ab54e07b3a55b594&sidoCode=41&sggCode=${result}`;
  const API_URL_SCHOOLBUS = `/api/notice/schoolBus.do?key=6a148abff9f84168ab54e07b3a55b594&sidoCode=41&sggCode=${result}`;
  const API_URL_YEAROFWORK = `/api/notice/yearOfWork.do?key=6a148abff9f84168ab54e07b3a55b594&sidoCode=41&sggCode=${result}`;
  const API_URL_SAFETYEDU = `/api/notice/safetyEdu.do?key=6a148abff9f84168ab54e07b3a55b594&sidoCode=41&sggCode=${result}`;
  const API_URL_DEDUCTIONSOCIETY = `/api/notice/deductionSociety.do?key=6a148abff9f84168ab54e07b3a55b594&sidoCode=41&sggCode=${result}`;

  useEffect(() => {
    axios
      .all([
        axios.get(`${API_URL_BASICINFO}`),
        axios.get(`${API_URL_BUILDING}`),
        axios.get(`${API_URL_CLASSAREA}`),
        axios.get(`${API_URL_TEACHERSINFO}`),
        axios.get(`${API_URL_LESSONDAY}`),
        axios.get(`${API_URL_SCHOOLMEAL}`),
        axios.get(`${API_URL_SCHOOLBUS}`),
        axios.get(`${API_URL_YEAROFWORK}`),
        axios.get(`${API_URL_SAFETYEDU}`),
        axios.get(`${API_URL_DEDUCTIONSOCIETY}`),
      ])
      .then(
        axios.spread(
          (res1, res2, res3, res4, res5, res6, res7, res8, res9, res10) => {
            setBasicInfo(res1.data.kinderInfo[id]);
            setBuilding(res2.data.kinderInfo[id]);
            setClassArea(res3.data.kinderInfo[id]);
            setTeachersInfo(res4.data.kinderInfo[id]);
            setLessonDay(res5.data.kinderInfo[id]);
            setSchoolMeal(res6.data.kinderInfo[id]);
            setSchoolBus(res7.data.kinderInfo[id]);
            setYearOfWork(res8.data.kinderInfo[id]);
            setSafetyEdu(res9.data.kinderInfo[id]);
            setDeductionSociety(res10.data.kinderInfo[id]);
          }
        )
      )
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log();
      });
  }, []);

  if (
    !basicInfo ||
    !building ||
    !classArea ||
    !teachersInfo ||
    !lessonDay ||
    !schoolMeal ||
    !schoolBus ||
    !yearOfWork ||
    !safetyEdu ||
    !deductionSociety
  ) {
    return <CircularProgress />;
  }

  console.log(basicInfo);

  return (
    //w
    <Container>
      <BasicInfo basicInfo={basicInfo} />
      <Building building={building} />
      <classArea classArea={classArea} />
      <TeacherCount teachersInfo={teachersInfo} />
      {/* lessonDay  안함*/}
      <SchoolMeal schoolMeal={schoolMeal} />
      <SchoolBus schoolBus={schoolBus} />
      <TeacherHowLongYears yearOfWork={yearOfWork} />
      {/* 안전점검,공제회 안함 */}
    </Container>
  );
};

export default DetailPage;
