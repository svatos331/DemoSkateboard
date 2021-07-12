import React from "react";

//other
import { Introduction, Event, Pages, Status, Album } from "./index";

export const Timeline = () => {
  return (
    <div className="timeline anim">
      <div className="timeline-left">
        <Introduction />
        <Event />
        <Pages />
      </div>
      <div className="timeline-right">
        <Status />
        <Album />
      </div>
    </div>
  );
};
