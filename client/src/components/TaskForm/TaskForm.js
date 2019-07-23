import React, { Component } from "react";
import uuid from "uuid/v4";
import "./TaskForm.css";
import { Link } from "react-router-dom";
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
    this.getCurrentParticipantId = this.getCurrentParticipantId.bind(this);
    this.getParticipantInfo = this.getParticipantInfo.bind(this);
    this.assignTask = this.assignTask.bind(this);
  }
  componentDidMount() {
    setInterval(() => {
      if (this.state.participantId !== "") {
        return clearInterval();
      }
      this.getCurrentParticipantId();
    }, 500);
  }

  getCurrentParticipantId() {
    if (this.props.userId !== null) {
      this.props.participants.map(participant => {
        if (participant.userId === this.props.userId) {
          return this.setState({ participantId: participant._id });
        }
      });
    }
  }
  getParticipantInfo(id) {
    let participantInfo;
    this.props.participants.map(participant => {
      let searchForTask = participant.tasks.map(task => {
        if (task._id === id) return task;
      });
      if (searchForTask.length > 0) participantInfo = participant;
    });
    return participantInfo;
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
    if (this.state.taskName === "" || !this.props.userId) return;
    API.saveTask({
      taskName: this.state.taskName,
      eventId: this.props.eventId
    })
      .then(res => {
        this.state.taskName = "";
        this.props.newTask(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  assignTask(taskId, pId) {
    API.assignTask({
      taskId: taskId,
      participantId: pId
    })
      .then(res => {
        this.props.assignTaskToState(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  unassignTask(taskId, pId) {
    API.unassignTask({
      taskId: taskId,
      participantId: pId
    })
      .then(res => {
        this.props.unassignTaskToState(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  deleteTask(_id) {
    API.deleteTask(_id).then(res => {
      console.log("Task Deleted");
      console.log(_id);

      this.loadTasks();
    });
  }

  render() {
    return (
      <div>
        <h2>Tasks</h2>
        <form className='NewTaskForm' onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Add New Task'
            id='taskName'
            name='taskName'
            value={this.state.taskName}
            onChange={this.handleChange}
          />

          <button type='submit'>Add Task</button>
        </form>
        <ul>
          {this.props.tasks.map(task => {
            if (task.taskAssigned) {
              let pInfo = this.getParticipantInfo(task._id);

              let checkParticipant =
                this.state.participantId === pInfo._id
                  ? () => {
                      this.unassignTask(task._id, this.state.participantId);
                    }
                  : () => {
                      console.log("not owner");
                    };
              return (
                <li className='Task' onClick={checkParticipant} key={task._id}>
                  <button onClick={this.deleteTask}>
                    <i className='fas fa-trash' />
                  </button>
                  {task.taskName}

                  <div className='Task-buttons'>
                    <span className='userId'>
                      <h6>{"Assigned To: " + pInfo.name}</h6>
                    </span>
                  </div>
                </li>
              );
            } else {
              let userCheck = !this.props.userId
                ? () => {
                    console.log("not logged in");
                  }
                : () => {
                    this.assignTask(task._id, this.state.participantId);
                  };
              return (
                <li className='Task' onClick={userCheck} key={task._id}>
                  <button onClick={this.deleteTask}>
                    <i className='fas fa-trash' />
                  </button>

                  {task.taskName}

                  <div className='Task-buttons'>
                    <h6>Assigned To:</h6>
                    <span className='userId'>
                      <h6>Not Assigned</h6>
                    </span>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default TaskForm;
