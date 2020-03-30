import React from 'react';
import { Session } from '../Session';

const SessionDisplay = props => {
    if (props.loading) {
        return <div className="title">Loading...</div>
    }

    if (props.meditationSessions.length === 0) {
        return <div className="title">There are no sessions yet!</div>;
    }
    else {

        return (
            <div>
                <div className="title">Total Recorded Sessions</div>
                {props.meditationSessions.map(session => {
                    return (
                        <Session
                            session={session}
                            deleteSession={props.deleteMeditationSession}
                        >
                        </Session>
                    )
                })}
            </div>
        )
    }
}

export default SessionDisplay;