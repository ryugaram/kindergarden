import "./App.css";
import React, { lazy, Suspense } from "react";
import { CircularProgress } from "@material-ui/core";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const DetailPage = lazy(() => import("./pages/Detail"));
const HomePage = lazy(() => import("./pages/Home"));

function App() {
  // const { kindergarden } = UserAxios();
  // if (!kindergarden) return <CircularProgress />;

  return (
    <Suspense fallback={<CircularProgress />}>
      <HashRouter>
        <Switch>
          <Route path="/detail/:addr/:id" children={<DetailPage />}>
            <DetailPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          {/* <Redirect path="**" to="/" /> */}
        </Switch>
      </HashRouter>
    </Suspense>
  );
}

export default App;
