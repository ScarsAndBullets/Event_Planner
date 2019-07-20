import React, { Component, useState } from "react";
import "./App.css";
import { Layout, Content } from "react-mdl";
import Nav from "./components/Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateEvent from "./pages/CreateEvent";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Nav />
          <Router>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/create-event" component={CreateEvent} />
              <Route path="/about" component={About} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
