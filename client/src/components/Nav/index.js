import React from "react";
import { Link } from "react-router-dom";
import { Header, Navigation, Drawer } from 'react-mdl';
require('./style.css');

function Nav() {
  return [
    <Header key="header" className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">𝔭𝔩𝔞𝔫𝔡</Link>} scroll>
      <Navigation>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/logout">logout</Link>
      </Navigation>
    </Header>,
    <Drawer key="drawer" title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">𝔭𝔩𝔞𝔫𝔡</Link>}>
      <Navigation>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/logout">logout</Link>
      </Navigation>
    </Drawer>
  ];
}

export default Nav;
