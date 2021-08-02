import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const UrlParamsTest = () => {
  let { id, addr } = useParams();
  return (
    //
    <div>
      test:{id} , {addr}
    </div>
  );
};

export default UrlParamsTest;
