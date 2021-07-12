import react, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = `/api/notice/deductionSociety.do?key=6a148abff9f84168ab54e07b3a55b594&sidoCode=41&sggCode=41133`;

const UserAxios = () => {
  const [kindergarden, setKindergarden] = useState();

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
  }, []);
  return { kindergarden };
};

export default UserAxios;
