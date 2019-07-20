import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Header, Navigation, Drawer } from 'react-mdl';
import Consumer from './../../AuthState'
require('./style.css');




function Nav(props) {
  console.log(props)
  return (
    <Header key="header" className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">𝔭𝔩𝔞𝔫𝔡</Link>} scroll>
      <Navigation>
        <Link to="/Login">Login</Link>
        <Link to="/Signup">Signup</Link>
        <Link to="/About">About</Link>
        <Link to="/Logout">Logout</Link>
      </Navigation>
    </Header> ,
    <Drawer key="drawer" title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">𝔭𝔩𝔞𝔫𝔡</Link>}>
      <Navigation>
        <Link to="/Login">Login</Link>
        <Link to="/Signup">Signup</Link>
        <Link to="/About">About</Link>
        <Link to="/Logout">Logout</Link>
      </Navigation>
    </Drawer>
  );
}

export default props => (
  <Consumer>
    {(authState) => (
      <Nav {...props} authState={authState} />
    )}
  </Consumer>
)
=======
import { Header, Navigation, Drawer } from "react-mdl";
require("./style.css");

function Nav() {

	return [
		<Header key="header" className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">𝔭𝔩𝔞𝔫𝔡</Link>} scroll>
			<Navigation>
				<Link to="/login">Login</Link>
				<Link to="/signup">Signup</Link>
				<Link to="/about">About</Link>
				<Link to="/logout">Logout</Link>
			</Navigation>
		</Header>,
		<Drawer key="drawer" title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">
			𝔭𝔩𝔞𝔫𝔡
		</Link>}>
			<Navigation>
				<Link to="/login">Login</Link>
				<Link to="/signup">Signup</Link>
				<Link to="/about">About</Link>
				<Link to="/logout">Logout</Link>
			</Navigation>
		</Drawer>
	];
};

export default Nav;
>>>>>>> 953e580904ba683f7362636638937606762cd5ca
