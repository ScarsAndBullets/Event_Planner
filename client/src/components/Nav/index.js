import React from "react";
import { Link } from "react-router-dom";
import { Header, Navigation, Drawer } from "react-mdl";
require("./style.css");

function Nav() {
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