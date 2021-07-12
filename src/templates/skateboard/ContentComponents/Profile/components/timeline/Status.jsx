import React, { useState } from "react";
import { useSelector } from "react-redux";

//other
import { ReactComponent as People } from "../../../../../../assets/templates/skateBoard/icons/profile/people.svg";
import { ReactComponent as Geo } from "../../../../../../assets/templates/skateBoard/icons/profile/geo.svg";
import { ReactComponent as Heart } from "../../../../../../assets/templates/skateBoard/icons/profile/mood.svg";

export const Status = () => {
  const [links, setLinks] = useState([
    {
      id: 0,
      name: "Status",
      isOpen: true,
    },
    {
      id: 1,
      name: "Photos",
      isOpen: false,
    },
    {
      id: 2,
      name: "Videos",
      isOpen: false,
    },
  ]);

  const handleLinkClick = (id) => {
    setLinks((prev) => {
      const newState = prev.map((link) => {
        if (link.id === id) {
          link.isOpen = true;
        } else {
          link.isOpen = false;
        }
        return link;
      });
      return newState;
    });
  };

  const name = useSelector((state) => state.skate.profile.name);
  const avatar = useSelector((state) => state.skate.profile.avatar);
  return (
    <div className="status box">
      <div className="status-menu">
        {links.map((link) =>
          link.isOpen ? (
            <div
              className="status-menu-item active"
              onClick={() => {
                handleLinkClick(link.id);
              }}
              style={{ cursor: "pointer" }}
            >
              {link.name}
            </div>
          ) : (
            <div
              className="status-menu-item"
              onClick={() => {
                handleLinkClick(link.id);
              }}
              style={{ cursor: "pointer" }}
            >
              {link.name}
            </div>
          )
        )}
      </div>
      <div className="status-main">
        <img src={avatar} className="status-img" />
        <textarea
          className="status-textarea"
          placeholder={`Write something to ${name}..`}
          defaultValue={""}
        />
      </div>
      <div className="status-actions">
        <div className="status-action" style={{ cursor: "pointer" }}>
          <People />
          People
        </div>
        <div className="status-action" style={{ cursor: "pointer" }}>
          <Geo />
          Check in
        </div>
        <div className="status-action" style={{ cursor: "pointer" }}>
          <Heart />
          Mood
        </div>
        <button className="status-share">Share</button>
      </div>
    </div>
  );
};
