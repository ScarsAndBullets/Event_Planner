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
				<ul>
					<Link to="/login">
						<span Link>Sign In </span>
					</Link>
					<span li> | </span>
					<Link to="/login">
						<span Link>Sign Out</span>
					</Link>
					<span li> | </span>
					<Link to="/about">
						<span Link>About</span>
					</Link>
				</ul>
			</nav>
		</Container>
	);
}

export default Nav;
