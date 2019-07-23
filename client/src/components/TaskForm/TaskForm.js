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
    console.log(id);
    API.deleteTask(id).then(res => {
      console.log("Task Deleted" + id);

      this.loadTasks();
    });
  }

  assignTask(_id) {
    console.log("Task Assigned to User");
    console.log(_id);
  }

  markTaskAssigned(_id) {
    // console.log(_id);
    // var updatedTasks = this.state.Task.map(task => {
    //   if (_id === this.task._id) task.done = !task.done;
    //   return task;
    // });
    console.log("StrikeThrough!!!");
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

        {this.state.Task.map(task => {
          return (
            <ul>
              <li
                className='Task'
                onClick={this.markTaskAssigned(this.state._id)}
                completed={task.done}
                onTaskAssigned={this.state.markTaskAssigned}
              >
                {/* <button onClick={this.deleteTask}>
                  <i class='fas fa-trash' />
                </button> */}

                <li className='Delete' key={task._id}>
                  <Link to={"/tasks/" + task._id} />
                  <button onClick={() => this.deleteTask(task._id)}>
                    <i class='fas fa-trash' />
                  </button>
                </li>

                {task.taskName}

                <div className='Task-buttons'>
                  <h6>Assigned To:</h6>
                  <span clssName='userId'>ParticipantId</span>
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
