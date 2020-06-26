import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const SessionGraph = ({ sessions }) => {
  const formattedSessions = sessions.map((sess) => {
    sess.date = new Date(sess.date).getDate();
  });
  return (
    <>
      {sessions.length > 0 && (
        <Chart data={sessions}>
          <ArgumentAxis />
          <ValueAxis />
          <BarSeries valueField="duration" argumentField="date" />
          <Title text="Sessions" />
          <Animation />
        </Chart>
      )}
    </>
  );
};

export default SessionGraph;
