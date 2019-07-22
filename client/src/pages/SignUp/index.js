import React, { Component } from "react";
import { HashRouter as Route, NavLink } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm";

class SignUp extends Component {
    render() {
        return (
            <div className='App'>
                <div className='App__Aside' />
                <div className='App__Form'>
                    <div className='PageSwitcher'>
                        <NavLink
                            to='/login'
                            activeClassName='PageSwitcher__Item--Active'
                            className='PageSwitcher__Item'
                        >
                            Log In
            </NavLink>
                        <NavLink
                            exact
                            to='/signup'
                            activeClassName='PageSwitcher__Item--Active'
                            className='PageSwitcher__Item'
                        >
                            Sign Up
            </NavLink>
                    </div>

                    <div className='FormTitle'>
                        <NavLink
                            to='/login'
                            activeClassName='FormTitle__Link--Active'
                            className='FormTitle__Link'
                        >
                            Log In
            </NavLink>{" "}
                        or{" "}
                        <NavLink
                            exact
                            to='/signup'
                            activeClassName='FormTitle__Link--Active'
                            className='FormTitle__Link'
                        >
                            Sign Up
            </NavLink>
                    </div>

                    <SignUpForm />
                </div>
            </div>
        );
    }
}

export default SignUp;