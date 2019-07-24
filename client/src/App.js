import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateEvent from "./pages/CreateEvent";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import EventView from "./pages/EventView";
import NoMatch from "./pages/NoMatch";
import Container from '@material-ui/core/Container';
import AppNavbar from "./components/AppNavbar";

class App extends Component {
	render() {
		return (
			<>
				<AppNavbar />
				<Container>
					<Router>
						<Switch>
							<Route path="/" exact component={Login} />
							<Route path="/login" component={Login} />
							<Route path="/signup" component={SignUp} />
							<Route path="/dashboard" exact component={Dashboard} />
							<Route path="/create-event" component={CreateEvent} />
							<Route path="/about" component={About} />
							<Route path="/event/:id" component={EventView} />
							<Route component={NoMatch} />
						</Switch>
					</Router>
				</Container>
			</>
		);
	}
}

export default App;
