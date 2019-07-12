import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class Dashboard extends Component {
	state = { events: [] };

	componentDidMount() {
		API.getEvents()
			.then(res => {
				this.setState({
					events: res.data
				});
				console.log(this.state.events);
			})
			.catch(err => {
				if (err) throw err;
			});
	}
	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-12">
						<h1>Dashboard</h1>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Dashboard;
