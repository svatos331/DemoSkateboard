
import React from "react";
import { useSelector } from "react-redux";
import MostWatched from "./MostWatched";


 const HomeComponent = () => {
  const channelLists = useSelector((state) => state.skate.channelLists);
  const videosDesctopList = useSelector((state) => state.skate.lists);
  return (
    <>
            <div className="main-header anim">Discover</div>


            
            <div className="main-blogs">
              <div style={{backgroundImage: "url(" + channelLists[0].blackImg + ")"}} className="main-blog anim">

                <div className="main-blog__title">{channelLists[0].desc}</div>
                <div className="main-blog__author" >
                  <div className="author-img__wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <img className="author-img" src={channelLists[0].userImg}/>
                  </div>
                  <div className="author-detail">
                    <div className="author-name">{channelLists[0].userName}</div>
                    <div className="author-info">{channelLists[0].views} views <span className="seperate" />{channelLists[0].ago} weeks ago</div>
                  </div>
                </div>
                <div className="main-blog__time">{channelLists[0].timeMach} min</div>
              </div>
              <div style={{backgroundImage: "url(" + channelLists[1].blackImg + ")"}}  className="main-blog anim" >
                <div className="main-blog__title">{channelLists[1].desc}</div>
                <div className="main-blog__author tips">
                  <div className="main-blog__time">{channelLists[1].timeMach} min</div>
                  <div className="author-img__wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <img className="author-img" src={channelLists[1].userImg} />
                  </div>
                  <div className="author-detail">
                    <div className="author-name">{channelLists[1].userName}</div>
                    <div className="author-info">{channelLists[1].views}  views <span />{channelLists[1].ago}  weeks ago</div>
                  </div>
                </div>
              </div>
            </div>






            <div className="small-header anim" >Most Watched</div>
            <div className="videos">
              {videosDesctopList.map((CurrentValue) => {
                return <MostWatched lists={CurrentValue} key={CurrentValue.id} />;
              })}
            </div>
        </>
    
        );
}




export default HomeComponent;