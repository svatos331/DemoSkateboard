import React from "react";
import { useSelector } from "react-redux";

export const Pages = () => {
  const users = useSelector((state) => state.skate.profile.friends);
  return (
    <div className="pages box">
      <div className="intro-title">
        Your pages
        <button className="intro-menu" />
      </div>
      {users.map((user) => (
        <div className="user" key={user.id}>
          <img src={user.image} alt="Аватар" className="user-img" />
          <div className="username">{user.name}</div>
        </div>
      ))}
    </div>
  );
};
