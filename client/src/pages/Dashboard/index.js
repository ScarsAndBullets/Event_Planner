import React, { Component } from "react";
import withAuth from "../../components/withAuth";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
<<<<<<< HEAD
import Form from "../../components/Form/Form";
=======
import Form from '../../components/Form/Form';
import EventCard from '../../components/EventCard/EventCard';

>>>>>>> f2be6660b840753192017a8cce1f91e5fcfbbf73
class Dashboard extends Component {
  state = { events: [] };

<<<<<<< HEAD
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
          <Col size='md-12'>
            <h1>Dashboard</h1>
          </Col>
        </Row>
        <Form />
      </Container>
    );
  }
=======
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

				<EventCard></EventCard>
				<Form></Form>
			</Container>
		);
	}
>>>>>>> f2be6660b840753192017a8cce1f91e5fcfbbf73
}

export default withAuth(Dashboard);
