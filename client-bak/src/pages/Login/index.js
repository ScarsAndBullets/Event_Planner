import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class Login extends Component {
  state = {
    email: "",
    password: ""
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
        password: this.state.password,
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default Login;