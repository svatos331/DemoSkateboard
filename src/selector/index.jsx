import React from "react";

//other
import classes from "./selector.module.scss";
import { Case } from "./case";

import skate from "./casesImages/skateboard.png";

const sites = [{ image: skate, path: "/skateBoard" }];
export const Selector = () => {
  return (
    <>
      <div className={classes.body}>
        <div className={classes.body__title}>Develop</div>
        <div className={classes.body__cases}>
          {sites.map((site) => {
            return <Case image={site.image} path={site.path} />;
          })}
        </div>
      </div>
    </>
  );
};
