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
		loggedIn: false
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
					console.log(res);
					this.setState({
						loggedIn: true
					});
				})
				.catch(err => {
					if (err) {
						if (err.response.status === 401)
							console.log("Incorrect username or password");
					}
				});
		}
	};

<<<<<<< HEAD:client/src/pages/Login.js
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
=======
  render() {
    return (
      <>
        <Row>
          <Col size="md 4" />
          <Col size="md-4">
            <Jumbotron>
              <h2>Plan your next event!</h2>
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
                name="Password"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Sign In
              </FormBtn>
            </form>
          </Col>
          <Col size="md-4" />
        </Row>
        <Row>
          <Col size="md-4"></Col>
          <Col size="md-4">
            <Link to={"/api/user/signup"}>
              <strong>
                Signup for an account!
              </strong>
            </Link>
          </Col>
          <Col size="md-4"></Col>
        </Row>
      </>
    );
  }
>>>>>>> 7b068973590524424a2cc7829ec4e8e2638fd470:client/src/pages/Login/index.js
}

export default Login;
