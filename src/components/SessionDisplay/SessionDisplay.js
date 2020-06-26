import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { SessionCard } from "../SessionCard";
import SessionGraph from "../SessionGraph";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const SessionDisplay = ({
  loading,
  meditationSessions,
  deleteMeditationSession,
}) => {
  const classes = useStyles();
  const meditationTime = meditationSessions.reduce(
    (acc, curr) => acc + curr.duration,
    0
  );
  const minutes = Math.floor(meditationTime / 60);
  const totalMinutes = minutes % 60;
  const hours = Math.floor(minutes / 60);
  const seconds = meditationTime % 60;
  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Grid spacing={3}>
      <Paper className={classes.paper}>
        <div className="subtitle">Total Meditation Time:</div>
        <Grid alignContent="space-between" direction="row">
          <div className="title">
            {" " + hours}:
            {totalMinutes < 10 ? "0" + totalMinutes : totalMinutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </div>
          <SessionGraph sessions={meditationSessions} />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SessionDisplay;
