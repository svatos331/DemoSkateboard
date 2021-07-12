import React from "react";
import { useSelector } from "react-redux";

//other
import { Listmusic } from "./Listmusic";
import "./PlayList.css";
import { skateReducer as skate } from "../../../../redux/reducers";

export const PlayList = () => {
  const tracks = useSelector((state) => state.skate.tracks);
  return (
    <div id="MusicList">
      <div id="player_track" className="">
        <div id="album_name">Dawn</div>
        <div id="track_name">Skylike - Dawn</div>
        <div id="track_time" className="active">
          <div id="current_time">00:07</div>
          <div id="track_length">03:09</div>
        </div>
        <div id="s_area">
          <div id="ins_time"></div>
          <div id="s_hover"></div>
          <div id="seek_bar"></div>
        </div>
      </div>

      <div className="anim" id="player_content">
        <div id="album_art">
          <img
            id="_1"
            src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_1.jpg"
            alt=""
          />
          <img
            className="active"
            id="_2"
            src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_2.jpg"
            alt=""
          />
          <img
            id="_3"
            src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_3.jpg"
            alt=""
          />
          <img
            id="_4"
            src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_4.jpg"
            alt=""
          />
          <img
            id="_5"
            src="https://raw.githubusercontent.com/himalayasingh/music-player-1/master/img/_5.jpg"
            alt=""
          />
        </div>

        <div id="player_controls">
          <button type="button" className="prev" aria-label="Previous">
            <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.875 0C1.10706 0 1.32962 0.0921874 1.49372 0.256282C1.65781 0.420376 1.75 0.642936 1.75 0.875V6.559L12.7173 0.196C13.6273 -0.3325 14.875 0.27125 14.875 1.414V6.559L25.8423 0.196C26.7523 -0.3325 28 0.27125 28 1.414V14.336C28 15.4788 26.7523 16.0825 25.8423 15.554L14.875 9.191V14.336C14.875 15.4788 13.6273 16.0825 12.7173 15.554L1.75 9.191V14.875C1.75 15.1071 1.65781 15.3296 1.49372 15.4937C1.32962 15.6578 1.10706 15.75 0.875 15.75C0.642936 15.75 0.420376 15.6578 0.256282 15.4937C0.0921873 15.3296 0 15.1071 0 14.875V0.875C0 0.642936 0.0921873 0.420376 0.256282 0.256282C0.420376 0.0921874 0.642936 0 0.875 0V0ZM13.125 1.98275L2.968 7.875L13.125 13.7672V1.98275ZM26.25 1.98275L16.093 7.875L26.25 13.7672V1.98275Z"
                fill="#fff"
              ></path>
            </svg>
          </button>
          <button type="button" className="play" aria-label="Play">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.907 7.99997L1.75 2.10772V13.8922L11.907 7.99997ZM13.293 6.78197C13.5076 6.90481 13.6858 7.08214 13.8098 7.29602C13.9339 7.5099 13.9992 7.75275 13.9992 7.99997C13.9992 8.2472 13.9339 8.49004 13.8098 8.70392C13.6858 8.9178 13.5076 9.09514 13.293 9.21797L2.15775 15.679C1.24775 16.2075 0 15.6037 0 14.461V1.53897C0 0.396223 1.24775 -0.207528 2.15775 0.320972L13.293 6.78197Z"
                fill="#fff"
              ></path>
            </svg>
          </button>
          <button type="button" className="next" aria-label="Next">
            <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.125 0C27.3571 0 27.5796 0.0921874 27.7437 0.256282C27.9078 0.420376 28 0.642936 28 0.875V14.875C28 15.1071 27.9078 15.3296 27.7437 15.4937C27.5796 15.6578 27.3571 15.75 27.125 15.75C26.8929 15.75 26.6704 15.6578 26.5063 15.4937C26.3422 15.3296 26.25 15.1071 26.25 14.875V9.191L15.2827 15.554C14.3727 16.0825 13.125 15.4788 13.125 14.336V9.191L2.15775 15.554C1.24775 16.0825 0 15.4788 0 14.336V1.414C0 0.27125 1.24775 -0.3325 2.15775 0.196L13.125 6.559V1.414C13.125 0.27125 14.3727 -0.3325 15.2827 0.196L26.25 6.559V0.875C26.25 0.642936 26.3422 0.420376 26.5063 0.256282C26.6704 0.0921874 26.8929 0 27.125 0V0ZM1.75 1.98275V13.7672L11.907 7.875L1.75 1.98275ZM14.875 1.98275V13.7672L25.032 7.875L14.875 1.98275Z"
                fill="#fff"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <ul id="plList">
        {tracks.map((CurrentValue) => {
          return <Listmusic data={CurrentValue} />;
        })}
      </ul>
    </div>
  );
};
