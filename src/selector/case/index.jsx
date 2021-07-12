import React from "react";
import { useHistory } from "react-router-dom";
//other

import classes from "./case.module.scss";

export const Case = ({ image, path }) => {
  const history = useHistory();

  const openSite = () => {
    history.push(path);
  };

  return (
    <>
      <div
        className={classes.body}
        style={{ backgroundImage: `url(${image})` }}
        onClick={openSite}
      >
        {/*<img src={} alt="" />*/}
      </div>
    </>
  );
};
