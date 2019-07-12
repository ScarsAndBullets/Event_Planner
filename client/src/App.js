import React, { Component } from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import EventDashboard from "./pages/EventDashboard";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import "./App.css";

//import Tasks from "./components/Tasks/Tasks";
//import NewTaskForm from "./components/TasksForm/NewTasksForm";
import TasksList from "./components/TasksList/TasksList";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Nav />
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/event-dashboard" component={EventDashboard} />
						<Route component={NoMatch} />
					</Switch>
					{/* <div className="App">
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h2>Welcome to Event Planner</h2>
					</div> */}
					{/* <NewTaskForm /> */}
					{/* <Tasks /> */}
					{/* <TasksList /> */}
				</div>
			</Router>
		);
	}
=======
import "./App.css"

import { Col, Row, Container } from "./components/Grid";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateEvent from "./pages/CreateEvent";
import About from "./pages/About";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Container fluid>
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/create-event" component={CreateEvent} />
              <Route path="/about" component={About} />
              <Route path="/" component={About} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
>>>>>>> 7b068973590524424a2cc7829ec4e8e2638fd470
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
