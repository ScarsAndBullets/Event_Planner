import React, { Component } from "react";
import uuid from "uuid/v4";
import "./NewTaskForm.css";

class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.createTask({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: "" });
  }
  render() {
    return (
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
    );
  }
}

export default NewTaskForm;
