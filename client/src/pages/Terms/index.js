import React, { Component } from "react";
import { Container } from "../../components/Grid";
import "./style.css"

class About extends Component {
    render() {
        return (
            <Container className="about-container">
                <div>
                    <h2>Terms of Service</h2>
                    <div className="text-left">
                        <p>Event Planner was created to fill the need for a simple and functional planning tool for getting together with family and friends. Instead of disjointed group text messages, phone calls, or in-person conversations, Event Planner keeps your event details, participants, and important tasks concisely organized in one place where key details won't be forgotten. Event creators and participants can see details about the event, who will be attending, and tasks needed to make the event happen as well as tasks other participants have volunteered for already.</p>
                        <h5>Manage your Event Details</h5>
                        <p><strong>What, where, and when</strong> - the primary components of every get together. Event Planner also gives you the capability to add important notes for your event participants, such as reinders to: </p>
                        <ul>
                            <li>Bring buy a ticket beforehand</li>
                            <li>Sign a waiver for activities</li>
                            <li>Apply sunscreen beforehand</li>
                            <li>BYOB</li>
                            <li>etc.</li>
                        </ul>
                        <h5>Invite Participants</h5>
                        <p>Send an event link by email, text, or social media, inviting your friends or family to participate in the event. Invited participants can see your event from the link and create an account to RSVP and pitch in to make your event great.</p>
                        <h5>Get Help from Participants</h5>
                        <p>Create a list of tasks, allowing users to sign up to bring food, chairs, equipment, etc... or even to help you with event setup or cleanup afterwards.</p>
                    </div>
                </div>
            </Container>
        );
    }
}
export default About;