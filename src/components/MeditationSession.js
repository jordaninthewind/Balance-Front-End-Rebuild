import React from 'react';

const MeditationSession = props => {
	let seconds = props.session.duration % 60;
	let minutes = Math.floor(props.session.duration / 60);
		if (minutes > 10) { minutes = minutes / 10};
	let hours = Math.floor(props.session.duration / 3600);

	return (
		<div className="tile">
			<p>Duration: 
				{hours >= 10 ? " " + hours : " 0" + hours}: 
				{minutes >= 10 ? minutes : "0" + minutes}:
				{seconds >= 10 ? seconds : "0" + seconds}
				<span><button onClick={() => { if (window.confirm("Are you sure?")) props.deleteSession(props.currentUser, props.session.id) }}>X</button></span>
			</p>
			<p>Date: {props.session.date}</p>
			
		</div>
	)
};

export default MeditationSession;
