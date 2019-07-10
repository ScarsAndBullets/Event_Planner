import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login"
// import dashboard from "./dashboard"
//import Tasks from "./components/Tasks/Tasks";
//import NewTaskForm from "./components/TasksForm/NewTasksForm";
import TasksList from "./components/TasksList/TasksList";

class App extends Component {
  render() {
    return (
      <>
        <Login />
      </>
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Event Planner</h2>
        </div>
        {/* <NewTaskForm /> */}
        {/* <Tasks /> */}
        <TasksList />
      </div>
    );
  }
}

export default App;