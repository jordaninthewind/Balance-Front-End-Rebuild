import React from 'react';
import { Button } from 'reactstrap';
import './Session.css';

const Session = props => {
  let seconds = props.session.duration % 60;
  let minutes = ~~(props.session.duration / 60);
  let hours = ~~(props.session.duration / 3600);
  if (minutes > 60) {
    minutes = minutes - hours * 60;
  }

  return (
    <div className="session">
      <div>
        Duration:
        {hours >= 10 ? ' ' + hours : ' 0' + hours}:
        {minutes >= 10 ? minutes : '0' + minutes}:
        {seconds >= 10 ? seconds : '0' + seconds}
        <span>
          <Button
            onClick={() => { if (window.confirm('Are you sure you want to delete this session?')) props.deleteSession(props.currentUser, props.session.id); }}
          >
            X
          </Button>
        </span>
      </div>
      <div>{props.session.date}</div>
    </div>
  );
};

export default Session;
