import React, { Component } from "react";

class CardTechnologies extends Component {
  render() {
    if (this.props.technologies == null) {
      return null;
    } else {
      return (
        <div id="card-technologies-container">
          <h3 id="card-technologies">
            Technologies used: {this.props.technologies}
          </h3>
        </div>
      );
    }
  }
}

export default CardTechnologies;
