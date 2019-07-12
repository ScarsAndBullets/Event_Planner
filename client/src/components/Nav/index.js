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
					<Link to={"/login"}>
						<span>Sign In </span>
					</Link>
					<span> | </span>
					<Link to={"/signout"}>
						<span>Sign Out</span>
					</Link>
					<span> | </span>
					<Link to={"/about"}>
						<span>About</span>
					</Link>
				</ul>
			</nav>
		</Container>
	);
}

export default Nav;
