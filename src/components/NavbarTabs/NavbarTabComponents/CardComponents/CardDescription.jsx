import React, { Component } from "react";

class CardDescription extends Component {
  render() {
    return (
      <div id="description-container">
        <p>{this.props.description.paragraph1}</p>
        <p>{this.props.description.paragraph2}</p>
      </div>
    );
  }
}

export default CardDescription;
