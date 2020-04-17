import React, { Component } from "react";

class CardBullets extends Component {
  render() {
    if (this.props.bullets == null) {
      return null;
    } else {
      const bullets = this.props.bullets;
      const listItems = bullets.map((bullet) => (
        <li className="card-bullet-point">{bullet}</li>
      ));
      return (
        <div id="card-bullet-list-container">
          <ul id="card-bullet-list">{listItems}</ul>
        </div>
      );
    }
  }
}

export default CardBullets;
