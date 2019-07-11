import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Login extends Component {
	state = {
		email: "",
		password: "",
		loggedIn: false,
		events: {}
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.email && this.state.password) {
			API.submitLogin({
				email: this.state.email,
				password: this.state.password
			})
				.then(res => {
					this.setState({
						events: res.data,
						loggedIn: true
					});
					console.log(this.state.events);
				})
				.catch(err => {
					if (err) {
						if (err.response.status === 401)
							console.log("Incorrect username or password");
					}
				});
		}
	};

	render() {
		const { loggedIn } = this.state;

		if (loggedIn) return <Redirect to="/event-dashboard" push={true} />;

		return (
			<Container fluid>
				<Row>
					<Col size="md 3" />
					<Col size="md-6">
						<Jumbotron>
							<h1>Event Planner</h1>
						</Jumbotron>
						<form>
							<Input
								value={this.state.email}
								onChange={this.handleInputChange}
								name="email"
								placeholder="Email (required)"
							/>
							<Input
								value={this.state.password}
								onChange={this.handleInputChange}
								name="password"
								placeholder="Password (required)"
							/>

							<FormBtn
								disabled={!(this.state.email && this.state.password)}
								onClick={this.handleFormSubmit}
							>
								Login
							</FormBtn>
						</form>
					</Col>
					<Col size="md-3" />
				</Row>
				<Row>
					<Col size="md-3" />
					<Col size="md-6">
						<Link to={"/api/user/signup"}>
							<strong>Signup for an account!</strong>
						</Link>
					</Col>
					<Col size="md-3" />
				</Row>
			</Container>
		);
	}
}

export default Login;
