import React, { Component } from "react";
import withAuth from "../../components/withAuth";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Form from "../../components/Form/Form";
import EventCard from "../../components/EventCard/EventCard";
import Slider from "../../components/Slider/Slider";
import "./Style.css";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = { events: [] };
		this.handleNewEvent = this.handleNewEvent.bind(this);
	}

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
	handleNewEvent(event) {
		this.state.events.push(event);
		console.log(this.state.events);
	}
	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-12">
						<h1>Dashboard</h1>
					</Col>
				</Row>

				{/* <EventCard></EventCard> */}
				<Slider />
				<Form handleNewEvent={this.handleNewEvent} />
			</Container>
		);
	}
}

export default withAuth(Dashboard);
