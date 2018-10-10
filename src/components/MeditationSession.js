import React from 'react';

const MeditationSession = props => {
	let seconds = props.session.duration % 60;
	let minutes = Math.floor(props.session.duration / 60);
	let hours = Math.floor(props.session.duration / 3600);
		if (minutes > 60) { minutes = minutes - (hours * 60) };

	return (
		<div className="tile">
			<p>Duration: 
				{hours >= 10 ? " " + hours : " 0" + hours}: 
				{minutes >= 10 ? minutes : "0" + minutes}:
				{seconds >= 10 ? seconds : "0" + seconds}
				<span><button onClick={() => { if (window.confirm("Are you sure you want to delete this session?")) props.deleteSession(props.currentUser, props.session.id) }}>X</button></span>
			</p>
			<p>{props.session.date}</p>
		</div>
	)
};

export default MeditationSession;
