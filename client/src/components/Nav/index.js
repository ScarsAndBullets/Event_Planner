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
<<<<<<< HEAD

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
=======
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
>>>>>>> dcb37b61bc1ee4da3eadbb26b825e0f19965747b
			</nav>
		</Container>
	);
}

export default Nav;
