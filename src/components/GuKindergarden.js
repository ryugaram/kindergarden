import React from "react";
import { CircularProgress } from "@material-ui/core";

const GuKindergarden = ({ kindergarden }) => {
  if (!kindergarden) return <CircularProgress />;
  return (
    //

    <div>ggg {console.log(kindergarden.data.kinderInfo)}</div>
  );
};

export default GuKindergarden;
