import React, { Component } from "react";
import withAuth from '../../components/withAuth';

class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
      </div>
    );
  }
}

export default withAuth(Dashboard);