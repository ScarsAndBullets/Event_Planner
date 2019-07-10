import React, { Component } from "react";
import "./Tasks.css";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleRemove() {
    this.props.removeTask(this.props.id);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleUpdate(event) {
    event.preventDefault();
    this.props.updatedTask(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleToggle(event) {
    this.props.toggleTask(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className='Task'>
          <form className='Task-edit-form' onSubmit={this.handleUpdate}>
            <input
              type='text'
              value={this.state.task}
              name='task'
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
      //Renders Tasks to React
    } else {
      result = (
        <div className='Task'>
          <li
            className={
              this.props.completed ? "Task-task completed" : "Task-task"
            }
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className='Task-buttons'>
            <button onClick={this.toggleForm}>
              <i class='far fa-edit' />
            </button>
            <button onClick={this.handleRemove}>
              <i class='fas fa-trash' />
            </button>
            <h6>Assigned To:</h6>
            <span>"userID"</span>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Task;
