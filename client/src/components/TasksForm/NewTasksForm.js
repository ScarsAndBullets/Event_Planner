import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className='form-group'>
      <input className='form-control' {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className='form-group'>
      <textarea className='form-control' rows='20' {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      style={{ float: "right", marginBottom: 10 }}
      className='btn btn-success'
    >
      {props.children}
    </button>
  );
}

// import React, { Component } from "react";
// import uuid from "uuid/v4";
// import "./NewTaskForm.css";

// class NewTaskForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { tasks: "" };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     this.props.createTask({ ...this.state, id: uuid(), completed: false });
//     this.setState({ task: "" });
//   }
//   render() {
//     return (
//       <form className='NewTaskForm' onSubmit={this.handleSubmit}>
//         <input
//           type='text'
//           placeholder='Add New Task'
//           id='task'
//           name='task'
//           value={this.state.task}
//           onChange={this.handleChange}
//         />
//         <button>Add Task</button>
//       </form>
//     );
//   }
// }

// export default NewTaskForm;
