import React, { Component, createContext } from "react";

const { Provider, Consumer } = createContext();

class AuthState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
    }
  }

  handleLoginResponse = (bool) => {
    this.setState({ isLoggedIn: bool })
  }

  render() {
    return (
      <Provider
        value={{
          isLoggedIn: this.state.isLoggedIn,
          handleLoginResponse: this.handleLoginResponse
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { AuthState }

export default Consumer