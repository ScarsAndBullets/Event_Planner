import React, { Component, useState } from "react";
import "./App.css";
import { Layout, Content } from "react-mdl";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateEvent from "./pages/CreateEvent";
import About from "./pages/About";
import Home from "./pages/Home";
import { AuthState } from "./AuthState";

// import { Task } from "./components/Tasks/task";
// import { NewTaskForm } from "./components/TasksForm/NewTasksForm";
// import { TaskList } from "./components/TasksList/TasksList";

class App extends Component {
  render() {
    return (
      <AuthState>
        <React.Fragment>
          <Nav />
          <Router>
            <Switch>
              <Route path='/' exact component={Login} />
              <Route path='/login' component={Login} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/create-event' component={CreateEvent} />
              <Route path='/about' component={About} />

              {/* <Route path='/tasks' component={Task} />
              <Route path='/tasks' component={NewTaskForm} /> */}
              {/* <Route path='/tasks' component={TaskList} /> */}
            </Switch>
          </Router>
        </React.Fragment>
      </AuthState>
    );
  }
}

export default App;
