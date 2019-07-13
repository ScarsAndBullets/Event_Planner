import React from "react";
import { Col, Row, Container } from "../Grid";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<Container>
			<nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand" href="/">
					Event Planner
				</a>

				<Link to={"/login"}>
					<span Link>Sign In </span>
				</Link>
				<span> | </span>
				<Link to={"/login">
					<span Link>Sign Out</span>
				</Link>
				<span> | </span>
				<Link to="/about">
					<span Link>About</span>
				</Link>
			</nav>
		</Container>
	);
}

export default Nav;
