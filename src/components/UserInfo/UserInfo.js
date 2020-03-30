import React from "react";
import "./UserInfo.css";

const UserInfo = ({ user, timeMeditated }) => {
  const minutes = Math.floor(timeMeditated / 60);
  const totalMinutes = minutes % 60;
  const hours = Math.floor(minutes / 60);
  const seconds = timeMeditated % 60;

  return (
    <>
      <img
        className="profilePicture"
        alt="profile"
        src={user.photoUrl}
      />
      <div className="title">User Name: {user.fullName}</div>
      <div className="subtitle">User E-mail: {user.email}</div>
      <div className="subtitle">
        Total Time:
        {" " + hours}:{totalMinutes < 10 ? "0" + totalMinutes : totalMinutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </div>
      <div className="subtitle">Location: {user.location}</div>
    </>
  );
};

UserInfo.defaultProps = {
  user: { photoUrl: "shambhala sun.png" }
};

export default UserInfo;
