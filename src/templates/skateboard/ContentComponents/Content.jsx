import React from "react";
import { Route, Switch } from "react-router-dom";

//other
import { HeaderComponent } from "./HeaderComponent/HeaderComponent";
import HomeComponent from "./MainComponents/HomeComponent/HomeComponent";
import { PlayList } from "./PlayList/PlayList";
import { Trending } from "./Trending/Trending";
import { Bookmark } from "./Bookmark/Bookmark";
import { Profile } from "./Profile/Profile";
import { Tutorial } from "./Tutorial/Tutorial";
import { LiveStream } from "./LiveStream/LiveStream";

export const Content = ({ channelLists }) => {
  return (
    <>
      <div className="wrapper">
        <HeaderComponent />
        <div className="main-container">
          <Switch>
            <Route path="/skateBoard/home" exact>
              <HomeComponent />
            </Route>
            <Route path="/skateBoard/home/trending">
              <Trending />
            </Route>
            <Route path="/skateBoard/Playlist">
              <PlayList />
            </Route>

            <Route path="/skateBoard/bookmark">
              <Bookmark />
            </Route>

            <Route path="/skateBoard/Profile">
              <Profile />
            </Route>

            <Route path="/skateBoard/Tutorial">
              <Tutorial />
            </Route>

            <Route path="/skateBoard/livestream">
              <LiveStream />
            </Route>
          </Switch>

          {/*</BrowserRouter>*/}
        </div>
      </div>
    </>
  );
};
