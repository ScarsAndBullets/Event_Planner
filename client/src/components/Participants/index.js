import React, { Component } from "react";
import withAuth from "../../components/withAuth";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";

constructor(props) {
	super(props);
	this.state = { events: [] };
	this.handleNewEvent = this.handleNewEvent.bind(this);
}

componentDidMount() {
	API.participants()
		.then(res => {
			this.setState({
				events: res.data
			});
		})
		.catch(err => {
			if (err) throw err;
		});
}

handleNewEvent(event) {
	this.state.events.push(event);
	this.setState({
		events: this.state.events
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

			{/* <EventCard></EventCard> */}
			<Slider events={this.state.events} />
			<Form handleNewEvent={this.handleNewEvent} />
		</Container>
	);
}
}

export default withAuth(Dashboard);
