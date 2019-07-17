import React, { Component } from "react";
import { HashRouter as Route, NavLink } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm";
import TaskList from "../../components/TasksList/TasksList";

class SignUp extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App__Aside' />
        <div className='App__Form'>
          <div className='PageSwitcher'>
            <NavLink
              to='/log-in'
              activeClassName='PageSwitcher__Item--Active'
              className='PageSwitcher__Item'
            >
              Sign In
            </NavLink>
            <NavLink
              exact
              to='/sign-up'
              activeClassName='PageSwitcher__Item--Active'
              className='PageSwitcher__Item'
            >
              Sign Up
            </NavLink>
          </div>

          <div className='FormTitle'>
            <NavLink
              to='/log-in'
              activeClassName='FormTitle__Link--Active'
              className='FormTitle__Link'
            >
              Sign In
            </NavLink>{" "}
            or{" "}
            <NavLink
              exact
              to='/'
              activeClassName='FormTitle__Link--Active'
              className='FormTitle__Link'
            >
              Sign Up
            </NavLink>
          </div>
          <TaskList />
          <SignUpForm />
        </div>
      </div>
    );
  }
}

export default SignUp;
