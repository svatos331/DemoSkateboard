import React from "react";

export const Event = () => {
  return (
    <div className="event box">
      <div className="event-wrapper">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          className="event-img"
        />
        <div className="event-date">
          <div className="event-month">Jan</div>
          <div className="event-day">01</div>
        </div>
        <div className="event-title">Winter Wonderland</div>
        <div className="event-subtitle">01st Jan, 2019 07:00AM</div>
      </div>
    </div>
  );
};
