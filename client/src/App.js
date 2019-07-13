import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content App">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">𝔭𝔩𝔞𝔫𝔡</Link>} scroll>
            <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/logout">logout</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">𝔭𝔩𝔞𝔫𝔡</Link>}>
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/logout">logout</Link>  
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;