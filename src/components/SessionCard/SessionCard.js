import React from "react";
import {
  Card,
  Button,
  makeStyles,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core';
import "./SessionCard.scss";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 300,
    textAlign: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12
  },
  cta: {
    flexDirection: 'column'
  }
});

const SessionCard = ({ session, deleteSession }) => {
  let seconds = session.duration % 60;
  let minutes = ~~(session.duration / 60);
  let hours = ~~(session.duration / 3600);

  if (minutes > 60) {
    minutes = minutes - hours * 60;
  }
  let time = `
    ${(hours >= 10 ? " " + hours : " 0" + hours)}:
    ${minutes >= 10 ? minutes : "0" + minutes}:
    ${seconds >= 10 ? seconds : "0" + seconds}
    `

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
          {session.date}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Session Time:
        </Typography>
        <Typography variant="h5" component="h2">
          {time}
        </Typography>
        <CardActions className={classes.cta}>
          <Button
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this session?"))
                deleteSession(session.id);
            }}
          >
            Delete Session
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default SessionCard;
