import React, { Component } from "react";
import {
	Tabs,
	Tab,
	Grid,
	Cell,
	Card,
	CardTitle,
	CardText,
	CardActions,
	Button,
	CardMenu,
	IconButton
} from "react-mdl";
import EventCard from "../../components/EventCard/EventCard";
import "./Slider.css";

class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0
		};
	}

	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div className="slider card -grid">
					{/* <h5>Upcoming Events</h5> */}
					<Grid>
						{this.props.events.map(card => (
							<Cell col={3} tablet={6} phone={12}>
								<EventCard events={card} />
							</Cell>
						))}
					</Grid>
				</div>
			);
		} else if (this.state.activeTab === 1) {
			return (
				<div>
					<p>Coming Soon!</p>
				</div>
			);
		}
	}
	render() {
		return (
			<div>
				<Tabs
					activeTab={this.state.activeTab}
					onChange={tabId => this.setState({ activeTab: tabId })}
					ripple
				>
					<Tab><span className="fontColor">Upcoming Events</span> </Tab>
					<Tab><span className="fontColor">Past Events</span></Tab>
				</Tabs>
				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}
export default Slider;
