//Libs
import React, { lazy, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Other
import { SkateBoardLoader } from "./templates/skateboard/Loader";
import { StartLoader } from "./selector/Loader";
import { setLogin } from "./redux/actions/skateboard/loginActions";

const SkateBoard = lazy(() =>
  import("./templates/skateboard").then((module) => ({
    default: module.SkateBoard,
  }))
);
const Selector = lazy(() =>
  import("./selector").then((module) => ({
    default: module.Selector,
  }))
);
const Login = lazy(() =>
  import("./templates/skateboard/Login").then((module) => ({
    default: module.Login,
  }))
);
export const App = () => {
  const [isLogin, setIsLogin] = useState(
    !!JSON.parse(localStorage.getItem("skateUser"))
  );

  const handleSetLogin = () => {
    setIsLogin(!isLogin);
  };
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.skate.userData);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("skateUser"));
    if (data && !userData.email.length) {
      dispatch(setLogin(data));
    }
  }, []);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <React.Suspense fallback={<StartLoader />}>
            <Selector />
          </React.Suspense>
        </Route>
        <Route path="/skateBoard">
          {isLogin ? (
            <React.Suspense fallback={<SkateBoardLoader />}>
              <SkateBoard />
            </React.Suspense>
          ) : (
            <React.Suspense fallback={<SkateBoardLoader />}>
              <Login handleSetLogin={handleSetLogin} />
            </React.Suspense>
          )}
        </Route>
      </Switch>
    </>
  );
};
