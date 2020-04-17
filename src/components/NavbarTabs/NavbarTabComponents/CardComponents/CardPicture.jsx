import React, { Component } from "react";
import ImagesBank from "./ImagesBank";

class CardPicture extends Component {
  render() {
    if (this.props.image == null) {
      return null;
    } else {
      return (
        <div id="card-image-container">
          <img
            id="card-image"
            src={ImagesBank[this.props.image]}
            alt="Me!"
            style={{ transform: this.props.rotation }}
          />
        </div>
      );
    }
  }
}

export default CardPicture;
