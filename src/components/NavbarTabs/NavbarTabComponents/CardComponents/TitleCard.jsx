import React, { Component } from "react";

class TitleCard extends Component {
  render() {
    if (this.props.title == null) {
      return null;
    } else {
      return (
        <div id="card-title-container">
          <h1 id="card-title">{this.props.title}</h1>
        </div>
      );
    }
  }
}

export default TitleCard;
