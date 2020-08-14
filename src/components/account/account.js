import React, { Component } from "react";

class Account extends Component {
  renderContent() {
    return <h1> contnent </h1>;
    // this.props.navbarLinks.map()
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Account;
