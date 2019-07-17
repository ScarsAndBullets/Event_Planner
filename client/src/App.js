import React, { Component } from "react";
import "./App.css";
import { Layout, Content } from "react-mdl";
import Nav from "./components/Nav";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <div className='demo-big-content App'>
        <Layout>
          <Nav />
          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
