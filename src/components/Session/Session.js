import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";
import "./Session.scss";

const Session = ({ session, deleteSession, currentUser }) => {
  let seconds = session.duration % 60;
  let minutes = ~~(session.duration / 60);
  let hours = ~~(session.duration / 3600);

  if (minutes > 60) {
    minutes = minutes - hours * 60;
  }

  return (
    <Col sm="6">
      <Card className="session" width="100%">
        <CardTitle>
          {hours >= 10 ? " " + hours : " 0" + hours}:
          {minutes >= 10 ? minutes : "0" + minutes}:
          {seconds >= 10 ? seconds : "0" + seconds}
        </CardTitle>
        <CardSubtitle>{session.date}</CardSubtitle>
        <Button
          className="btn-light"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this session?"))
              deleteSession(currentUser, session.id);
          }}
        >
          X
        </Button>
      </Card>
    </Col>
  );
};

export default Session;
