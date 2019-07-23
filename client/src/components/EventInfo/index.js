import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";

class EventInfo extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Col size="md-12">
					<h1>{this.props.title}</h1>
				</Col>

				<Col size="md-12">
					<h3>{`${this.props.date} ${this.props.time}`}</h3>
				</Col>
				<Col size="md-12">{this.props.details}</Col>
				<Col size="md-12">{this.props.location}</Col>
				<Col size="md-12">{this.props.requirements}</Col>
			</div>
		);
	}
}
export default EventInfo;
