import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import ParticipantChip from "./../ParticipantChip"
import Paper from '@material-ui/core/Paper';
import AddParticipant from "./../AddParticipant/AddParticipant";


function Participants(props) {
	return (
		<>
			<h3>Invited Participants</h3>
			<AddParticipant eventId={props.eventId} />
			<Grid
				container
				direction="row"
				justify="flex-start"
				alignItems="baseline"
				spacing={8}
			>
				{props.participants.map(chip => (
					<Grid item xs={6} sm={3} key={chip._id}>
						<ParticipantChip participant={chip} />
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default Participants;
