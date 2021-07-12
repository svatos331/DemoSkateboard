import React from "react";
import { useSelector } from "react-redux";

//other
import { ReactComponent as Case } from "../../../../../../assets/templates/skateBoard/icons/profile/case.svg";
import { ReactComponent as Home } from "../../../../../../assets/templates/skateBoard/icons/profile/home.svg";
import { ReactComponent as Carousel } from "../../../../../../assets/templates/skateBoard/icons/profile/carousel.svg";

export const Introduction = () => {
  const designIn = useSelector(
    (state) => state.skate.profile.introduction.designAt
  );
  const liveIn = useSelector(
    (state) => state.skate.profile.introduction.liveIn
  );
  const name = useSelector((state) => state.skate.profile.name);
  return (
    <div className="intro box">
      <div className="intro-title">
        Introduction
        <button className="intro-menu" />
      </div>
      <div className="info">
        <div className="info-item">
          <Case />
          Product Designer at <a style={{ cursor: "pointer" }}>{designIn}</a>
        </div>
        <div className="info-item">
          <Home />
          Live in <a style={{ cursor: "pointer" }}>{liveIn}</a>
        </div>
        <div className="info-item">
          <Carousel />
          Player name <a style={{ cursor: "pointer" }}>{name}</a>
        </div>
      </div>
    </div>
  );
};
