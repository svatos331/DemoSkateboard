import React from "react";

//other
import classes from "./loader.module.scss";
// import loader from "../../../assets/templates/skateBoard/Skateboarding.gif";
import loader from "../../../assets/templates/skateBoard/giphy.gif";

export const SkateBoardLoader = () => {
  return (
    <div className={classes.body}>
      <img src={loader} />
    </div>
  );
};
