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
      taskAssigned: "",
      Task: [],
      completed: "",
      text: "",
      _id: "",
      tasks: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.markTaskAssigned = this.markTaskAssigned.bind(this);
    //this.handleTextChange = this.handleTextChange.bind(this);
    // this.handleDeleteItem = this.handleDeleteItem.bind(this);
    // this.assignTask = this.assignTask.bind(this);
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
      console.log("res" + res);
    });
  }

  deleteTask(id) {
    API.deleteTask(id).then(res => {
      console.log("Task Deleted" + id);
      this.loadTasks();
    });
  }

  assignTask(id) {
    console.log("Task Assigned to User");
    console.log(id);
  }

  markTaskAssigned(id) {
    var updatedTasks = this.state.Task.map(task => {
      if (id === task._id) task.done = !task.done;

      return task;
    });
  }

  // handleDeleteItem(itemId) {
  //   var updatedItems = this.state.Task.filter(item => {
  //     return task.id !== taskId;
  //   });
  // }

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

        <ul>
          {this.state.Task.map(task => {
            return (
              <li
                className='Task'
                key={task._id}
                id={task._id}
                text={task.text}
                onClick={this.markTaskAssigned(task._id)}
                completed={task.done}
                onTaskAssigned={this.assignTask}
              >
                <li className='Delete' key={task._id}>
                  <Link to={"/tasks/" + task._id} />
                  <button onClick={() => this.deleteTask(task._id)}>
                    <i class='fas fa-trash' />
                  </button>
                </li>
                <div className='taskName'>{task.taskName}</div>
                <div className='Task-buttons'>
                  <h6>Assigned To:</h6>
                  <span className='participantId'>Not Assigned</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TaskForm;
