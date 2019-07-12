import React from "react";
import { Col, Row, Container } from "../Grid";
import { Link } from "react-router-dom";

function Nav() {
<<<<<<< HEAD
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<a className="navbar-brand" href="/">
				Event Planner
			</a>
		</nav>
	);
=======
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
>>>>>>> 7b068973590524424a2cc7829ec4e8e2638fd470
}

export default Nav;
