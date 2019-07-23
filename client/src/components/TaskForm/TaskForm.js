import React, { Component } from "react";
import uuid from "uuid/v4";
import "./TaskForm.css";
import { Col, Row, Container } from "../TasksGrid/TasksGrid";
import API from "../../utils/API";

class TaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taskName: "",
			participantId: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.getParticipantId = this.getParticipantId.bind(this);
	}
	componentDidMount() {
		setInterval(() => {
			if (this.state.participantId !== "") {
				return clearInterval();
			}
			this.getParticipantId();
		}, 500);
	}

	getParticipantId() {
		if (this.props.userId !== null) {
			this.props.participants.map(participant => {
				if (participant.userId === this.props.userId) {
					return this.setState({ participantId: participant._id });
				}
			});
		}
	}

	handleChange(event) {
		let name = event.target.name;
		let value = event.target.value;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.props);

		API.saveTask({
			taskName: this.state.taskName,
			eventId: this.props.eventId
		}).then(res => {
			this.state.taskName = "";
			this.props.newTask(res.data);
		});
	}

	deleteTask(_id) {
		API.deleteTask(_id).then(res => {
			console.log("Task Deleted");
			console.log(_id);

			this.loadTasks();
		});
	}

	// assignTask(id) {}

	render() {
		return (
			<div>
				<form className="NewTaskForm" onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="Add New Task"
						id="taskName"
						name="taskName"
						value={this.state.taskName}
						onChange={this.handleChange}
					/>

					<button type="submit">Add Task</button>
				</form>

				{this.props.tasks.map(task => {
					return (
						<ul>
							<li className="Task" onClick={this.assignTask}>
								<button onClick={this.deleteTask}>
									<i className="fas fa-trash" />
								</button>
								{task.taskName}
								<div className="Task-buttons">
									<h6>Assigned To:</h6>
									<span className="userId">ParticipantId</span>
								</div>
							</li>
						</ul>
					);
				})}
			</div>
		);
	}
}

export default TaskForm;
