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
            {/* 𝔭𝔩𝔞𝔫𝔡 */}
            {/* <span className="logo-font" >pland</span> */}
            <a href="https://fontmeme.com/fonts/amita-font/"><img src="https://fontmeme.com/permalink/190723/e5aa62e9d0f6db09b615db9afa472644.png" alt="amita-font" border="0"></img></a>        </Link>}>
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