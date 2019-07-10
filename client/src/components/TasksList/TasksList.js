import React, { Component } from "react";
import NewTaskForm from "../TasksForm/NewTasksForm";
import Task from "../Tasks/Tasks";
import "./TasksList.css";

class TasksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  create(newTask) {
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }
  remove(id) {
    this.setState({
      tasks: this.state.tasks.filter(tsk => tsk.id !== id)
    });
  }
  update(id, updatedTask) {
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return { ...task, task: updatedTask };
      }
      return task;
    });
    this.setState({ tasks: updatedTasks });
  }
  toggleCompletion(id) {
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    this.setState({ tasks: updatedTasks });
  }
  render() {
    const tasks = this.state.tasks.map(task => {
      return (
        <Task
          key={task.id}
          id={task.id}
          task={task.task}
          completed={task.completed}
          removeTask={this.remove}
          updatedTask={this.update}
          toggleTask={this.toggleCompletion}
        />
      );
    });
    return (
      <div className='TaskList'>
        <h1>
          Tasks! <span>Choose what you want to contribute</span>
        </h1>
        <ul>
          <NewTaskForm createTask={this.create} />
          {tasks}
        </ul>
      </div>
    );
  }
}

export default TasksList;
