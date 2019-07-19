import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";

import API from "../../utils/API";

class Detail extends Component {
  state = {
    task: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getTask(this.props.match.params.id)
      .then(res => this.setState({ task: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size='md-12'>
            <Jumbotron>
              <h1>{this.state.task.taskName}</h1>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size='md-2'>
            <Link to='/'>← Back to Tasks Page</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TasksList;

// import React, { Component } from "react";
// import NewTaskForm from "../TasksForm/NewTasksForm";
// import Task from "../Tasks/task";
// import "./TasksList.css";

// class TasksList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: []
//     };
//     this.create = this.create.bind(this);
//     this.remove = this.remove.bind(this);
//     this.update = this.update.bind(this);
//     this.toggleCompletion = this.toggleCompletion.bind(this);
//   }
//   create(newTask) {
//     this.setState({
//       tasks: [...this.state.tasks, newTask]
//     });
//   }
//   remove(id) {
//     this.setState({
//       tasks: this.state.tasks.filter(tsk => tsk.id !== id)
//     });
//   }
//   update(id, updatedTask) {
//     const updatedTasks = this.state.tasks.map(task => {
//       if (task.id === id) {
//         return { ...task, task: updatedTask };
//       }
//       return task;
//     });
//     this.setState({ tasks: updatedTasks });
//   }
//   toggleCompletion(id) {
//     const updatedTasks = this.state.tasks.map(task => {
//       if (task.id === id) {
//         return { ...task, completed: !task.completed };
//       }
//       return task;
//     });
//     this.setState({ tasks: updatedTasks });
//   }
//   render() {
//     const tasks = this.state.tasks.map(task => {
//       return (
//         <Task
//           key={task.id}
//           id={task.id}
//           task={task.task}
//           completed={task.completed}
//           removeTask={this.remove}
//           updatedTask={this.update}
//           toggleTask={this.toggleCompletion}
//         />
//       );
//     });
//     return (
//       <div className='TaskList'>
//         <h1>
//           Tasks! <span>Choose what you want to contribute</span>
//         </h1>
//         <ul>
//           <NewTaskForm createTask={this.create} />
//           {tasks}
//         </ul>
//       </div>
//     );
//   }
// }

// export default TasksList;
