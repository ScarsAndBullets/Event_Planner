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
          <Col size='md-12' />
        </Row>
        {/* <EventCard></EventCard> */}
        <Slider events={this.state.events} />
        <Form handleNewEvent={this.handleNewEvent} />
      </Container>
    );
  }
}

export default withAuth(Dashboard);
