import React from "react";
import { Link } from "react-router-dom";
import { Header, Navigation, Drawer } from "react-mdl";
require("./style.css");

function Nav() {
<<<<<<< HEAD
	return [
		<Header
			key="header"
			className="header-color"
			title={
				<Link style={{ textDecoration: "none", color: "white" }} to="/">
					𝔭𝔩𝔞𝔫𝔡
				</Link>
			}
			scroll
		>
			<Navigation>
				<Link to="/login">Login</Link>
				<Link to="/signup">Signup</Link>
				<Link to="/about">About</Link>
				<Link to="/logout">Logout</Link>
			</Navigation>
		</Header>,
		<Drawer
			key="drawer"
			title={
				<Link style={{ textDecoration: "none", color: "black" }} to="/">
					𝔭𝔩𝔞𝔫𝔡
				</Link>
			}
		>
			<Navigation>
				<Link to="/login">Login</Link>
				<Link to="/signup">Signup</Link>
				<Link to="/about">About</Link>
				<Link to="/logout">Logout</Link>
			</Navigation>
		</Drawer>
	];
}

export default Nav;
=======
    return [
        <Header key="header" className="header-color" title={
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                <span className="logo-font">pland</span>

            </Link>} scroll>
            <Navigation>
                <Link to="/login">
                    Login
				</Link>
                <Link to="/signup">
                    Signup
				</Link>
                <Link to="/about">
                    About
				</Link>
                <Link to="/logout">
                    Logout
				</Link>
            </Navigation>
        </Header>,
        <Drawer key="drawer" title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">
            <span className="logo-font" >pland</span>
        </Link>}>
            <Navigation>
                <Link to="/login">
                    Login
				</Link>
                <Link to="/signup">
                    Signup
				</Link>
                <Link to="/about">
                    About
				</Link>
                <Link to="/logout">
                    Logout
				</Link>
            </Navigation>
        </Drawer>
    ];
};

export default Nav;
>>>>>>> 3da8f6ed518c77b5f39c382bcc3c2390e5c29a16
