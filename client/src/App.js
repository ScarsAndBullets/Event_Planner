import React, { Component } from "react";
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
}

export default App;
