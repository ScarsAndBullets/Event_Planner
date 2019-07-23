import React, { Component } from "react";
import API, { AuthService } from "../utils/API";
import { Link, Redirect, withRouter } from "react-router-dom";

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Auth = new AuthService();
    }

    // componentDidMount() {
    // 	if (this.Auth.loggedIn()) {
    // 		this.props.history.push("/dashboard");
    // 	}
    // }

    handleChange(e) {
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        console.log(this.state.password)

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.email && this.state.password) {
            this.Auth.login({
                email: this.state.email,
                password: this.state.password
            })
                .then(res => {
                    this.props.history.push("/dashboard");
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">
                            E-Mail Address
						</label>
                        <input
                            type="email"
                            id="email"
                            className="FormField__Input"
                            placeholder="Enter your email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">
                            Password
						</label>
                        <input
                            type="password"
                            id="password"
                            className="FormField__Input"
                            placeholder="Enter your password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20" type="submit">
                            Sign In
						</button>{" "}
                        <Link to="/signup" className="FormField__Link">
                            Create an account
						</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignInForm);