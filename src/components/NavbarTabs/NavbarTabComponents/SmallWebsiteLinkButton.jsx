import React, { Component } from "react";

import WebsiteIcon from "../../../assets/images/icons/monitor.svg";

import "./SmallButton.css";

class SmallWebsiteButton extends Component {
  render() {
    return (
      <div>
        <a
          href={this.props.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="small-button"
            src={WebsiteIcon}
            alt="See this website live"
          />
        </a>
      </div>
    );
  }
}

export default SmallWebsiteButton;
