import React, { Component } from "react";

class Purchases extends Component {
  render() {
    const { className } = this.props;
    return <div className={`${className} purchases`}>Purchases Go Here</div>;
  }
}

export default Purchases;
