import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { SessionCard } from "../SessionCard";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
}));

const SessionDisplay = (props) => {
  const classes = useStyles();
  if (props.loading) {
    return <div className="title">Loading...</div>;
  }

  return (
    <Paper className={classes.paper}>
      <div className="title">Total Recorded Sessions: </div>
      <h1>I am the sessions container</h1>
      {/* {props.meditationSessions.map(session => {
                        return (
                            <SessionCard
                                key={Math.random()}
                                session={session}
                                deleteSession={props.deleteMeditationSession}
                            >
                            </SessionCard>
                        )
                    })} */}
    </Paper>
  );
};

export default SessionDisplay;
