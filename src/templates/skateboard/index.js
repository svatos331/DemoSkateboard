import React, { lazy, useState } from "react";

//other
import "../../assets/templates/skateBoard/css/SkateBoard.scss";
import { NavBar } from "./NavBar/NavBar";
import { Content } from "./ContentComponents/Content";

// const NavBar = lazy(() =>
//   import("./NavBar/NavBar").then((module) => ({
//     default: module.NavBar,
//   }))
// );

// const Content = lazy(() =>
//   import("./ContentComponents/Content").then((module) => ({
//     default: module.Content,
//   }))
// );

export const SkateBoard = () => {
  return (
    <>
        <div className="body">
          <div className="container">
            {/*<React.Suspense fallback={<p>Loading...</p>}>*/}
            <NavBar />
            {/*</React.Suspense>*/}
            {/*<React.Suspense fallback={<p>Loading...</p>}>*/}
            <Content />
            {/*</React.Suspense>*/}
          </div>
        </div>

    </>
  );
};
