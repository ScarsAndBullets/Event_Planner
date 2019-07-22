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
      taskAssigned: "",
      Task: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.loadTasks();
  }

  loadTasks() {
    API.getTasks()
      .then(res => {
        this.setState({
          Task: res.data
        });
        console.log("Tasks Loaded (this.state.Task)");
        console.log(this.state.Task);
      })
      .catch(err => console.log(err));
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
    API.saveTask({
      taskName: this.state.task,
      taskAssigned: false
      //   strikeThrough: false
    }).then(res => {
      console.log("New Task Created " + this.state.task);
      this.loadTasks();
    });
  }

  deleteTask(_id) {
    API.deleteTask(_id).then(res => {
      console.log("Task Deleted");
      console.log(_id);

      this.loadTasks();
    });
  }

  assignTask(_id) {
    console.log("Task Assigned to User");
    console.log(_id);
  }

  render() {
    return (
      <div>
        <form className='NewTaskForm' onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Add New Task'
            id='task'
            name='task'
            value={this.state.task}
            onChange={this.handleChange}
          />

          <button>Add Task</button>
        </form>

        {this.state.Task.map(task => {
          return (
            <ul>
              <li className='Task' onClick={this.assignTask}>
                {task.taskName}
                <div className='Task-buttons'>
                  <button onClick={this.deleteTask}>
                    <i class='fas fa-trash' />
                  </button>
                  <h6>Assigned To:</h6>
                  <span clssName='userId'>userId</span>
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
