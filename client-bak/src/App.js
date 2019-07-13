import React, { Component } from "react";
import "./App.css"

import { Col, Row, Container } from "./components/Grid";
import { Layout, Content } from 'react-mdl';
import Nav from "./components/Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateEvent from "./pages/CreateEvent";
import About from "./pages/About";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Router>
          <Content>
            <Nav />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/create-event" component={CreateEvent} />
                <Route path="/about" component={About} />
                // <Route path="/" component={About} />
              </Switch>
            </Content>
          </Router>
        </Layout>
      </div>
    );
  }
}

export default App;
