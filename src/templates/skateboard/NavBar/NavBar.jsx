import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Home } from "../../../assets/templates/skateBoard/icons/navbar/home.svg";
import { ReactComponent as Streaming } from "../../../assets/templates/skateBoard/icons/navbar/streaming.svg";
import { ReactComponent as PlayList } from "../../../assets/templates/skateBoard/icons/navbar/playlist.svg";
import { ReactComponent as BookMark } from "../../../assets/templates/skateBoard/icons/navbar/bookmark.svg";
import { ReactComponent as LiveStream } from "../../../assets/templates/skateBoard/icons/navbar/liveStream.svg";
import { ReactComponent as Tutorial } from "../../../assets/templates/skateBoard/icons/navbar/tutorial.svg";
import { ReactComponent as Competation } from "../../../assets/templates/skateBoard/icons/navbar/competation.svg";
import { ReactComponent as Community } from "../../../assets/templates/skateBoard/icons/navbar/community.svg";
import { BrowserRouter, Route, Link } from "react-router-dom";


export const NavBar = () => {
  return (
    <>
      <div className="sidebar">
        <span className="logo">S</span>
        <a className="logo-expand" href="#">
          skateboard
        </a>
        <div className="side-wrapper">
          <div className="side-title">MENU</div>
          <div className="side-menu">
         
          <NavLink
              className="sidebar-link discover"
              to="/skateBoard/Profile"
              activeClassName="is-active"
            >
              <PlayList />
              Profile
            </NavLink>


            <NavLink
              className="sidebar-link discover"
              to="/skateBoard/Home"
              activeClassName="is-active"
            >
              <Home />
              Discover
            </NavLink>
            {/* <NavLink
              className="sidebar-link"
              to="/skateBoard/streaming"
              activeClassName="is-active"
            >
              <Streaming />
              Streaming
            </NavLink> */}
            <NavLink
              className="sidebar-link discover"
              to="/skateBoard/Playlist"
              activeClassName="is-active"
            >
              <PlayList />
              Playlist
            </NavLink>
            <NavLink
              className="sidebar-link"
              to="/skateBoard/bookmark"
              activeClassName="is-active"
            >
              <BookMark />
              Bookmark
            </NavLink>
          </div>
        </div>
        <div className="side-wrapper">
          <div className="side-title">CATEGORY</div>
          <div className="side-menu">
            <NavLink
              className="sidebar-link"
              to="/skateBoard/livestream"
              activeClassName="is-active"
            >
              <LiveStream />
              Live Stream
            </NavLink>
            <NavLink
              className="sidebar-link"
              to="/skateBoard/tutorial"
              activeClassName="is-active"
            >
              <Tutorial />
              Tutorial
            </NavLink>
            <NavLink
              className="sidebar-link"
              to="/skateBoard/competation"
              activeClassName="is-active"
            >
              <Competation />
              Competation
            </NavLink>
            <NavLink
              className="sidebar-link"
              to="/skateBoard/community"
              activeClassName="is-active"
            >
              <Community />
              Community
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
