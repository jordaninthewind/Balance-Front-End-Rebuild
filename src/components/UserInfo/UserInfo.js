import React from "react";
import "./UserInfo.css";

const UserInfo = ({ currentUserData, timeMeditated }) => {
  const minutes = Math.floor(timeMeditated / 60);
  const totalMinutes = minutes % 60;
  const hours = Math.floor(minutes / 60);
  const seconds = timeMeditated % 60;

  return (
    <>
      <img
        className="profilePicture"
        alt="profile"
        src={currentUserData.profile_url}
      />
      <div className="title">User Name: {currentUserData.name}</div>
      <div className="subtitle">
        Total Time:
        {" " + hours}:{totalMinutes < 10 ? "0" + totalMinutes : totalMinutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </div>
      <div className="subtitle">Location: {currentUserData.location}</div>
    </>
  );
};

UserInfo.defaultProps = {
  currentUserData: { profile_url: "shambhala sun.png" }
};

export default UserInfo;
