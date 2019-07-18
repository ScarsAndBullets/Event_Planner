import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import API from "../utils/API";

class SignUpForm extends Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
			password2: "",
			firstName: "",
			lastName: "",
			phoneNumber: "",
			hasAgreed: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let target = e.target;
		let value = target.type === "checkbox" ? target.checked : target.value;
		let name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		API.submitSignup({
			email: this.state.email,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			phoneNumber: this.state.phoneNumber,
			password: this.state.password,
			password2: this.state.password2
		})
			.then(res => {
				console.log(res.data);
				this.props.history.push("/log-in");
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<div className="FormCenter">
				<form onSubmit={this.handleSubmit} className="FormFields">
					<div className="FormField">
						<label className="FormField__Label" htmlFor="firstName">
							First Name
						</label>
						<input
							type="text"
							id="firstName"
							className="FormField__Input"
							placeholder="Enter your first name"
							name="firstName"
							value={this.state.firstName}
							onChange={this.handleChange}
						/>
					</div>
					<div className="FormField">
						<label className="FormField__Label" htmlFor="lastName">
							Last Name
						</label>
						<input
							type="text"
							id="lastName"
							className="FormField__Input"
							placeholder="Enter your last name"
							name="lastName"
							value={this.state.lastName}
							onChange={this.handleChange}
						/>
					</div>
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
						<label className="FormField__Label" htmlFor="phoneNumber">
							Phone Number
						</label>
						<input
							type="text"
							id="phoneNumber"
							className="FormField__Input"
							placeholder="Enter your phone number"
							name="phoneNumber"
							value={this.state.phoneNumber}
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
						<label className="FormField__Label" htmlFor="password2">
							Confirm Password
						</label>
						<input
							type="password"
							id="password2"
							className="FormField__Input"
							placeholder="Confirm your password"
							name="password2"
							value={this.state.password2}
							onChange={this.handleChange}
						/>
					</div>

					<div className="FormField">
						<label className="FormField__CheckboxLabel">
							<input
								className="FormField__Checkbox"
								type="checkbox"
								name="hasAgreed"
								value={this.state.hasAgreed}
								onChange={this.handleChange}
							/>{" "}
							I agree all statements in{" "}
							<a href="" className="FormField__TermsLink">
								Terms of Service
							</a>
						</label>
					</div>

					<div className="FormField">
						<button className="FormField__Button mr-20" type="submit">
							Sign Up
						</button>{" "}
						<Link to="/log-in" className="FormField__Link">
							I'm already member
						</Link>
					</div>
				</form>
			</div>
		);
	}
}
export default withRouter(SignUpForm);
