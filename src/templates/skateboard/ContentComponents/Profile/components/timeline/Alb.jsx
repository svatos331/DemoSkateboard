import React from "react";
import { useSelector } from "react-redux";

import { ReactComponent as Like } from "../../../../../../assets/templates/skateBoard/icons/profile/like.svg";
import { ReactComponent as Comment } from "../../../../../../assets/templates/skateBoard/icons/profile/comment.svg";
import { ReactComponent as Repost } from "../../../../../../assets/templates/skateBoard/icons/profile/repost.svg";

export const Album = () => {
  const name = useSelector((state) => state.skate.profile.name);
  const { type, time, text, images, likes, comments, reposts } = useSelector(
    (state) => state.skate.profile.album
  );
  return (
    <div className="album box">
      <div className="status-main">
        <img
          src="https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg"
          className="status-img"
        />
        <div className="album-detail">
          <div className="album-title">
            <strong>{name}</strong> create new <span>{type}</span>
          </div>
          <div className="album-date">{time}</div>
        </div>
        <button className="intro-menu" />
      </div>
      <div className="album-content">
        {text}
        <div className="album-photos">
          {images.map((image) =>
            image.main ? (
              <img
                key={image.id}
                src={image.src}
                alt="Photo"
                className="album-photo"
              />
            ) : null
          )}
          <div className="album-right">
            {images.map((image) =>
              !image.main ? (
                <img
                  key={image.id}
                  src={image.src}
                  alt="Photo"
                  className="album-photo"
                />
              ) : null
            )}
          </div>
        </div>
      </div>
      <div className="album-actions">
        <div className="album-action" style={{ cursor: "pointer" }}>
          <Like />
          {likes}
        </div>
        <div className="album-action" style={{ cursor: "pointer" }}>
          <Comment />
          {comments}
        </div>
        <div className="album-action" style={{ cursor: "pointer" }}>
          <Repost />
          {reposts}
        </div>
      </div>
    </div>
  );
};
