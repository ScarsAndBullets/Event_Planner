import React, { Component } from "react";
import withAuth from "../../components/withAuth";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Form from '../../components/Form/Form';
import Slider from '../../components/Slider/Slider'


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
				<Slider></Slider>
				<Form></Form>
			</Container>
		);
	}
}

export default withAuth(Dashboard);
