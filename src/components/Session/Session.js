import React from "react";
import "./Session.scss";

const Session = ({ session, deleteSession }) => {
  let seconds = session.duration % 60;
  let minutes = ~~(session.duration / 60);
  let hours = ~~(session.duration / 3600);

  if (minutes > 60) {
    minutes = minutes - hours * 60;
  }

  return (
    <div>
      <h1>
        {hours >= 10 ? " " + hours : " 0" + hours}:
          {minutes >= 10 ? minutes : "0" + minutes}:
          {seconds >= 10 ? seconds : "0" + seconds}
      </h1>
      <h2>{session.date}</h2>
      <button
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this session?"))
            deleteSession(session.id);
        }}
      >
        X
        </button>
    </div>
  );
};

export default Session;
