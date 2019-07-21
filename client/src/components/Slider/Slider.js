import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import EventCard from '../../components/EventCard/EventCard';
import './Slider.css';


class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            cardData: [
                {
                    imgUrl: "https://i.kinja-img.com/gawker-media/image/upload/s--8myN5kD9--/c_scale,f_auto,fl_progressive,q_80,w_800/exhl9hxjevx2uadvte3u.jpg"
                },
                {
                    imgUrl: "https://i.kinja-img.com/gawker-media/image/upload/s--8myN5kD9--/c_scale,f_auto,fl_progressive,q_80,w_800/exhl9hxjevx2uadvte3u.jpg"
                },
                {
                    imgUrl: "https://i.kinja-img.com/gawker-media/image/upload/s--8myN5kD9--/c_scale,f_auto,fl_progressive,q_80,w_800/exhl9hxjevx2uadvte3u.jpg"
                },
                {
                    imgUrl: "https://www.magalufevents.com/images/mcppaintparty.jpg"
                },
                {
                    imgUrl: "https://www.magalufevents.com/images/mcppaintparty.jpg"
                },
                {
                    imgUrl: "https://static.meraevents.com/microsites/newyear/img/nye-banner-1.jpg"
                },
                {
                    imgUrl: "https://static.meraevents.com/microsites/newyear/img/nye-banner-1.jpg"
                },
                {
                    imgUrl: "https://static.meraevents.com/microsites/newyear/img/nye-banner-1.jpg",
                    text: "",
                    url: ""
                },

            ]
        };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="slider card -grid">
                    <Grid>
                        {this.state.cardData.map((card) =>
                            <Cell col={3} tablet={6} phone={12}>
                                <EventCard />
                            </Cell>
                        )}
                    </Grid>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is New Event </h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is pass Event</h1></div>
            )
        }
    }
    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>New Event</Tab>
                    <Tab>pass Event</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Slider;