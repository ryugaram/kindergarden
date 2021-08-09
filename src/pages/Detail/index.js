import React from "react";
import Container from "@material-ui/core/Container";
import { useParams } from "react-router-dom";

const DetailPage = () => {
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
  console.log(result, id);
  return (
    //w
    <Container>
      주소: {addr} 아이디 :{id}
    </Container>
  );
};

export default DetailPage;
