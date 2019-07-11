import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class EventDashboard extends Component {
	state = {};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-12">
						<h1>Event Dashboard</h1>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default EventDashboard;
