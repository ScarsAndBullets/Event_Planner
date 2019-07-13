import React from "react";
import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
require('./style.css');

function Nav() {
  return (
    <div>
      <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">MyPortfolio</Link>} scroll>
        <Navigation>
          <Link to="/aboutme">About Me</Link>
          <Link to="/logout">logout</Link>
        </Navigation>
      </Header>
      <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">MyPortfolio</Link>}>
        <Navigation>
          <Link to="/aboutme">About Me</Link>
          <Link to="/logout">logout</Link>
        </Navigation>
      </Drawer>
    </div>
  );
}

export default Nav;
