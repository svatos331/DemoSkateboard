
import React from "react";
import { Link } from "react-router-dom";

class BookmarkLists extends React.Component {
  render() {
    return (
      <Link
        className="nonestyleTagA"
        to={{
          pathname: "/skateBoard/Home/Trending",
          search: "",
          hash: "",
          state: {},
        }}
      >
        <div className="video anim">
          <div className="video-time">{this.props.lists.timeMach} min</div>
          <div className="video-wrapper">
            <video muted>
              <source src={this.props.lists.videosorce} type="video/mp4" />
            </video>
            <div className="author-img__wrapper video-author">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <img className="author-img" src={this.props.lists.userImg} />
            </div>
          </div>
          <div className="video-by">{this.props.lists.userName}</div>
          <div className="video-name">{this.props.lists.desc}</div>
          <div className="video-view">
            {this.props.lists.views} views
            <span className="seperate video-seperate" />
            {this.props.lists.ago} week ago
          </div>
        </div>
      </Link>
    );
  }
}

export default BookmarkLists;
