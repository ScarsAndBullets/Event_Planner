import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import OpenWithRounded from "@material-ui/icons/OpenWithRounded";
import AddParticipant from "../../components/AddParticipant/AddParticipant";
import EventCard from "../../components/EventCard/EventCard";
import API from "../../utils/API";
import TaskForm from "../../components/TaskForm/TaskForm";

class EventView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			details: "",
			date: "",
			time: "",
			location: "",
			requirements: "",
			userId: "",
			eventOwnerId: "",
			tasks: [],
			participants: [],
			eventId: ""
		};
		this.updateParticipantGoing = this.updateParticipantGoing.bind(this);
		this.newTask = this.newTask.bind(this);
		this.assignTaskToState = this.assignTaskToState.bind(this);
		this.unassignTaskToState = this.unassignTaskToState.bind(this);
	}
	componentDidMount() {
		const {
			match: { params }
		} = this.props;
		API.getEventView(params.id).then(event => {
			event = event.data;
			this.setState({
				title: event.title,
				details: event.details,
				date: event.date,
				time: event.time,
				location: event.location,
				requirements: event.requirements,
				tasks: event.tasks,
				participants: event.participants,
				userId: event.userId,
				eventOwnerId: event.eventOwnerId,
				eventId: event.eventId
			});
			console.log(this.state);
		});
	}

	//Find participant in state by id, switch attending to true if false, or vice versa.
	updateParticipantGoing(id) {
		this.state.participants.map(participant => {
			if (participant._id === id) {
				participant.attending
					? (participant.attending = false)
					: (participant.attending = true);
				return this.setState({
					participants: this.state.participants
				});
			}
		});
	}

	newTask(task) {
		this.state.tasks.push(task);
		this.setState({
			tasks: this.state.tasks
		});
	}

	assignTaskToState(taskAndParticipant) {
		let participant = taskAndParticipant.participant;
		let task = taskAndParticipant.task;
		this.state.tasks.map(stateTask => {
			if (task._id === stateTask._id) {
				stateTask.taskAssigned = true;
				stateTask.strikeThrough = true;
			}
		});
		this.state.participants.map(stateParticipant => {
			if (participant._id === stateParticipant._id) {
				stateParticipant.tasks.push(task);
			}
		});
		this.setState({
			tasks: this.state.tasks,
			participants: this.state.participants
		});
	}

	unassignTaskToState(taskAndParticipant) {
		console.log(this.state);
		let participant = taskAndParticipant.participant;
		let task = taskAndParticipant.task;
		this.state.tasks.map(stateTask => {
			if (task._id === stateTask._id) {
				stateTask.taskAssigned = false;
				stateTask.strikeThrough = false;
			}
		});
		this.state.participants.filter(stateParticipant => {
			if (participant._id !== stateParticipant._id) {
				return stateParticipant;
			}
		});
		this.setState({
			tasks: this.state.tasks,
			participants: this.state.participants
		});
	}

	deleteTask(taskId) {}

	render() {
		return (
			<div>
				<AddParticipant />

				<TaskForm
					tasks={this.state.tasks}
					participants={this.state.participants}
					newTask={this.newTask}
					assignTaskToState={this.assignTaskToState}
					unassignTaskToState={this.unassignTaskToState}
					eventId={this.state.eventId}
					userId={this.state.userId}
				/>

				{/* Example Participant Component passing down data */}
				{/* <Participants participants={this.state.participants} updateGoing={this.updateParticipantGoing}/> */}
			</div>
		);
	}
}
// BELOW: Not sure what this logic is for?
// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
	return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
	return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
	return (
		<div
			className={size
				.split(" ")
				.map(size => "col-" + size)
				.join(" ")}
		>
			{children}
		</div>
	);
}
// END: unsure about logice
// BELOW: needed to export everything in this file
export default EventView;
