import React, { Component } from "react";
import "./App.css"

import { Col, Row, Container } from "./components/Grid";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateEvent from "./pages/CreateEvent";
import About from "./pages/About";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Container fluid>
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/create-event" component={CreateEvent} />
              <Route path="/about" component={About} />
              <Route path="/" component={About} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;