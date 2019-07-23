import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import ParticipantChip from "./../ParticipantChip"
import Paper from '@material-ui/core/Paper';


function Participants(props) {
	return (
		<Paper>
			<h3>Invited Participants</h3>
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
		</Paper>
	);
}

export default Participants;
