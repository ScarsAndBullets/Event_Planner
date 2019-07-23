// import React, { useState } from 'react';
import React from "react";
import "./index.css";
import Chip from '@material-ui/core/Chip';


function ParticipantChip(props) {
	console.log(props.participant.attending)
	console.log(props.participant.name)
	console.log(props.participant.email)
	return (
		<Chip color={props.participant.attending ? "primary" : "secondary"} size="small" label={props.participant.name ? props.participant.name : props.participant.email} />
	)
}

export default ParticipantChip;
