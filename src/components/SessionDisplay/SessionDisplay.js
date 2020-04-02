import React from 'react';
import Grid from '@material-ui/core/Grid';
import { SessionCard } from '../SessionCard';

const SessionDisplay = props => {
    if (props.loading) {
        return <div className="title">Loading...</div>
    }

    if (props.meditationSessions.length === 0) {
        return <div className="title">There are no sessions yet!</div>;
    } else {
    // TODO: Add grid spacing
        return (
            <>
                <div className="title">Total Recorded Sessions: </div>
                <Grid
                    container
                    direction="row-reverse"
                    justify="center"
                    alignItems="center"
                >
                    {props.meditationSessions.map(session => {
                        return (
                            <SessionCard
                                key={Math.random()}
                                session={session}
                                deleteSession={props.deleteMeditationSession}
                            >
                            </SessionCard>
                        )
                    })}
                </Grid>
            </>
        )
    }
}

export default SessionDisplay;